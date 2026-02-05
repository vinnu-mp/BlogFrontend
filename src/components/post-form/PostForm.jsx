import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const submit = async (data) => {
    const token = localStorage.getItem("token");

    try {
      let imageData = {}; //If image is not selected, then we will send this empty object, which dont do anything to the old values in db, so those are safe

      // 1️⃣ If image is selected, upload it
      if (data.image && data.image[0]) {
        // FormData is used to send files (binary data) via HTTP
        // Normal JSON cannot send files, so multipart/form-data is required
        const formData = new FormData();

        // "image" must match the field name expected by the backend (multer)
        // data.image is a FileList (because input type="file")
        // data.image[0] is the actual selected file object
        formData.append("image", data.image[0]);

        const uploadRes = await axios.post("/api/upload", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        imageData = {
          featuredImage: uploadRes.data.url,
          featuredImageId: uploadRes.data.public_id,
        };
      }

      // 2️⃣ UPDATE POST
      if (post) {
        const res = await axios.put(
          `/api/posts/${post._id}`,
          {
            ...data,
            ...imageData,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        navigate(`/posts/${res.data.post._id}`);
      }

      // 3️⃣ CREATE POST
      else {
        const res = await axios.post(
          "/api/posts",
          {
            ...data,
            ...imageData,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        navigate(`/posts/${res.data.post._id}`);
      }
    } catch (error) {
      console.error("Post submit error:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value == "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image(1MB max) :"
          type="file"
          className="mb-4 border border-blue-700"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img src={post.featuredImage} />
          </div>
        )}
        <Select
          options={["draft", "published"]}
          label="Status :"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full mt-7"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/axios";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor =
    post && userData ? post.userId.toString() === userData.id : false;

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${slug}`);
        setPost(res.data.post);
      } catch (err) {
        console.error("Failed to fetch post", err);
        navigate("/");
      }
    };

    if (slug) fetchPost();
    else navigate("/");
  }, [slug, navigate]);

  const deletePost = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="flex w-full gap-4">
          <div className="flex content-center justify-center w-1/2 h-full bg-gray-200 mb-4 relative border rounded-xl p-4">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="rounded-xl"
            />

            {isAuthor && (
              <div className="absolute right-6 top-6">
                <Link to={`/edit-post/${post._id}`}>
                  <Button bgColor="bg-green-500" className="mr-3">
                    Edit
                  </Button>
                </Link>
                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
          <div className="w-1/2 mt-2">
            <div className="w-full mb-6">
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="browser-css bg-gray-200 p-3 rounded-md">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

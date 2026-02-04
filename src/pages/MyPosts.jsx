import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const [posts, setPosts] = useState();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(res.data.posts);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Posts available
              </h1>
              <button
                onClick={() => navigate("/add-post")}
                className="m-4 bg-blue-500 text-md text-gray-900 border border-blue-600 font-bold py-2 px-3 rounded-xl"
              >
                Add your first post
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post._id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyPosts;

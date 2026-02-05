import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ _id, title, featuredImage }) => {
  return (
    <Link to={`/posts/${_id}`}>
      <div className="w-full h-85 bg-gray-100 rounded-xl p-4">
        <div className="w-full h-60 justify-center mb-4">
          <img
            src={featuredImage}
            alt={title}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;

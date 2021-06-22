import React from "react";
import Post from "./Post";

export const PostList = ({ posts }) => {
  return (
    <div className="blog-content layout">
      {posts.length
        ? posts.map((post) => <Post key={post.id} {...post} />)
        : "Нет записей"}
    </div>
  );
};

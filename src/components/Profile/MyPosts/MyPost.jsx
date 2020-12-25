import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add</button>
          <button>Delete</button>
        </div>
        <Post />
        <Post />
        <Post />

      </div>
    </div>
  );
};
export default MyPost;

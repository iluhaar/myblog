import React from "react";
import Profile from "../Profile";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {

  let postsElements = props.posts.map((posts) => (
    <Post item={posts.item} likesCount={posts.likesCount} />
  ));

  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add</button>
          <button>Delete</button>
        </div>
        <div className={s.post}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPost;

import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        className={s.horeses}
        src="https://www.meme-arsenal.com/memes/807f7063ae47455ef78d5a0743509576.jpg"
        alt="avatarPost"
      />
      <div>
        <p className={s.item}>{props.item}</p>
      </div>
      {props.likesCount} <span>Like</span>
    </div>
  );
};
export default Post;

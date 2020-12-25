import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <img
        className={s.horeses}
        src="https://www.meme-arsenal.com/memes/807f7063ae47455ef78d5a0743509576.jpg"
      />
      <a className={s.item}>pst 2</a>
      <span>Like</span>
    </div>
  );
};
export default Post;

import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post item={p.item} likesCount={p.likesCount} />
  ));

  let newElementPost = React.createRef();

  let addNewPost = () => {
    let text = newElementPost.current.value;
    props.addPost(text);
  };

  let onChangePost = () => {
    let text = newElementPost.current.value;
    props.onChangeArea(text);
  };
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea
            onChange={onChangePost}
            ref={newElementPost}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add</button>
          <button>Delete</button>
        </div>
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

export default MyPost;

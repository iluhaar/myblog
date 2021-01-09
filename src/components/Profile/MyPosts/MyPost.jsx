import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  onChangeAreaActionCreator,
} from "../../../redux/store.js";

const MyPost = (props) => {
  let newElementPost = React.createRef();
  let postsElements = props.posts.map((p) => (
    <Post item={p.item} likesCount={p.likesCount} />
  ));

  let addNewPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onChangePost = () => {
    let text = newElementPost.current.value;
    props.dispatch(onChangeAreaActionCreator(text));
  };

  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea
            placeholder="Enter New Message"
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

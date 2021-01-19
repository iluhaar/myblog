import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let newElementPost = React.createRef();
  let postsElements = props.posts.map((p) => (
    <Post item={p.item} likesCount={p.likesCount} />
  ));

  let addNewPost = () => {
    props.addNewPost();
  };

  let onChangeTextPost = () => {
    let text = newElementPost.current.value;
    props.onChangeTextPost(text);
  };

  return (
    <div className={s.content}> 
      <div>
        My posts
        <div>
          <textarea
            onChange={onChangeTextPost}
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

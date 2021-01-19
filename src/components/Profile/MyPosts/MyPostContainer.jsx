import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  onChangeAreaActionCreator,
} from "../../../redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  let state = props.store.getState();
  let addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onChangePost = (text) => {
    props.store.dispatch(onChangeAreaActionCreator(text));
  };

  return (
    <MyPost
      onChangeTextPost={onChangePost}
      addNewPost={addNewPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostContainer;

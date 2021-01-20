import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  onChangeAreaActionCreator,
} from "../../../redux/profileReducer";
import MyPost from "./MyPost";

// const MyPostContainer = (props) => {
//   let state = props.store.getState();
//   let addNewPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onChangePost = (text) => {
//     props.store.dispatch(onChangeAreaActionCreator(text));
//   };

//   return (
//     <MyPost
//       onChangeTextPost={onChangePost}
//       addNewPost={addNewPost}
//       posts={state.profilePage.posts}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost:() => {
      dispatch(addPostActionCreator());
    },
    onChangeTextPost:(text) => {
      dispatch(onChangeAreaActionCreator(text))
    }
  }
};


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;

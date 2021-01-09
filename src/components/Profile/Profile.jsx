import React from "react";
import MyPost from "./MyPosts/MyPost";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
export default Profile;

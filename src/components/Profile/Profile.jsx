import React from "react";
import MyPost from "./MyPosts/MyPost";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.profilePage.posts}
        dispatch={props.dispatch}
      />
    </div>
  );
};
export default Profile;

import React from "react";
import MyPost from "./MyPosts/MyPost";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};
export default Profile;

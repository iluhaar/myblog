import React from "react";
import MyPost from "./MyPosts/MyPost";
import MyPostContainer from "./MyPosts/MyPostContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer
        store={props.store}
      />
    </div>
  );
};
export default Profile;

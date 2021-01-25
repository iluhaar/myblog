import React from "react";
import Preloader from "../common/preLoader/Preloader";
import MyPost from "./MyPosts/MyPost";
import MyPostContainer from "./MyPosts/MyPostContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  debugger;
  if(!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer
        store={props.store}
      />
    </div>
  );
};
export default Profile;

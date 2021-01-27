import React from "react";
import Preloader from "../common/preLoader/Preloader";
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
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

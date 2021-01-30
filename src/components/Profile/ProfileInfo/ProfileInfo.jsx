import React from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../temp/img/userPhoto.jpg";
import Preloader from "../../common/preLoader/Preloader";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
  if (!props.profile.contacts) {
    return <Preloader />;
  }
  const contacts = props.profile.contacts;
  return (
    <div className={s.bodyPI}>
      <div>
        <img
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : userPhoto
          }
          alt={props.profile.fullName}
        />
      </div>
      <div> {props.profile.fullName}</div>
      <div> {props.profile.aboutMe} </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <>
        {" "}
        {props.profile.lookingForAJob !== true ? (
          props.profile.lookingForAJob
        ) : (
          <div className={s.jobIndicatorGreen}></div>
        )}
      </>
      <div>
        {" "}
        {props.profile.lookingForAJob !== false ? (
          props.profile.lookingForAJob
        ) : (
          <div className={s.jobIndicatorRed}></div>
        )}
      </div>
      <div>
        {" "}
        {props.profile.lookingForAJobDescription != null
          ? props.profile.lookingForAJobDescription
          : "I'm not looking for a job right now"}
      </div>
      <div>
        {Object.keys(contacts).map((key, i) => (
          <div key={i}>
            <div>{contacts[key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfileInfo;

// {Object.keys(contacts).map((key) => {
//   if (key !== null ? key : "nothing to show") {
//     return <div key={key.id}>
//       <p>
//         <a href={contacts[key]}></a>
//       </p>
//     </div>;
//   }
// })}

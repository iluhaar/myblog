import React from "react";
import s from "./Nav.module.css";

const sideFriendsBar = (props) => {
  let dialogsElements = props.state.sideBar.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  
  return (
    <div className={s.friednsBar}>
      <div>
       <div className={s.imgBar}>
         <img />
       </div>
      </div>
    </div>
  );
};
export default sideFriendsBar;

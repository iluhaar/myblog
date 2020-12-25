import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.item + " " + s.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.text}</div>;
};
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Kon" id="1" />
        <DialogItem name="Hoi" id="2" />
        <DialogItem name="Perdun" id="3" />
        <DialogItem name="Debil" id="4" />
        <DialogItem name="Bivalui" id="5" />
      </div>
      <div className={s.messages}>
        <Message text="konucha" />
        <Message text="privet" />
        <Message text="hallo" />
      </div>
    </div>
  );
};

export default Dialogs;
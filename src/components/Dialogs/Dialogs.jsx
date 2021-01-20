import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message text={message.message} key={message.id}/>
  ));

  let SendNewMessage = () => {
    props.SendNewMessage();
  };
  let onChangeMessageArea = (e) => {
    let messageText = e.target.value;
    props.onChangeMessageArea(messageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <textarea
        placeholder="Enter New Message"
        value={props.dialogsPage.newMessageText}
        onChange={onChangeMessageArea}
      ></textarea>
      <button onClick={SendNewMessage}>Send message</button>
    </div>
  );
};

export default Dialogs;

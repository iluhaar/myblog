import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let newMesssageElement = React.createRef();
  let addMessage = () => {
    let messageText = newMesssageElement.current.value;
    alert(messageText);
  };
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message text={message.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <textarea ref={newMesssageElement}></textarea>
      <button onClick={addMessage}>Send message</button>
    </div>
  );
};

export default Dialogs;

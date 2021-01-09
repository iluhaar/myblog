import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {
  addMessageActionCreator,
  onChangeMessageAreaActionCreator,
} from "../../redux/store";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let newMesssageElement = React.createRef();

  let addNewMessage = () => {
    let messageText = newMesssageElement.current.value;
    props.dispatch(addMessageActionCreator(messageText));
  };
  let onChangeMessageArea = () => {
    let text = newMesssageElement.current.value;
    props.dispatch(onChangeMessageAreaActionCreator(text));
  };

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message text={message.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <textarea ref={newMesssageElement}
        value={props.dialogsPage.newMesssageElement}
        onChange={onChangeMessageArea}
      ></textarea>
      <button onClick={addNewMessage}>Send message</button>
    </div>
  );
};

export default Dialogs;

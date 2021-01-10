import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {
  addMessageActionCreator,
  onChangeMessageAreaActionCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let newMesssageElement = React.createRef();
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message text={message.message} />
  ));

  let addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  let onChangeMessageArea = () => {
    let messageText = newMesssageElement.current.value;
    props.dispatch(onChangeMessageAreaActionCreator(messageText));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <textarea
        placeholder="Enter New Message"
        ref={newMesssageElement}
        value={props.dialogsPage.newMesssageElement}
        onChange={onChangeMessageArea}
      ></textarea>
      <button onClick={addNewMessage}>Send message</button>
    </div>
  );
};

export default Dialogs;

import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message text={message.message} key={message.id} />
  ));

  let addMessage = (values) => {
    props.SendNewMessage(values.newMessageText);
    console.log(values.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageReduxForm onSubmit={addMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageText"
          placeholder="Enter New Message"
        ></Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogs",
})(AddMessageForm);

export default Dialogs;

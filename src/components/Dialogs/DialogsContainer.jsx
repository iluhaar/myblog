import React from "react";
import {
  addMessageActionCreator,
  onChangeMessageAreaActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  debugger;
  let state = props.store.getState().dialogsPage;
  
  let SendNewMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let onChangeMessageAreaText = (messageText) => {
    props.store.dispatch(onChangeMessageAreaActionCreator(messageText));
  };

  return (
    <Dialogs
      SendNewMessage={SendNewMessageClick}
      onChangeMessageArea={onChangeMessageAreaText}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;

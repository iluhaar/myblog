import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  onChangeMessageAreaActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   debugger;
//   let state = props.store.getState().dialogsPage;

//   let SendNewMessageClick = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };
//   let onChangeMessageAreaText = (messageText) => {
//     props.store.dispatch(onChangeMessageAreaActionCreator(messageText));
//   };

//   return (
//     <Dialogs
//       SendNewMessage={SendNewMessageClick}
//       onChangeMessageArea={onChangeMessageAreaText}
//       dialogsPage={state}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    SendNewMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onChangeMessageArea: (messageText) => {
      dispatch(onChangeMessageAreaActionCreator(messageText));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

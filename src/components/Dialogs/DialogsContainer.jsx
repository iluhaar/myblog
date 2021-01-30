import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  onChangeMessageAreaActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
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
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect
)(Dialogs);
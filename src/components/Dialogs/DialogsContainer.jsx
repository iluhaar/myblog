import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator
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
    SendNewMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    },
    
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  // withAuthRedirect
)(Dialogs);

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { setAuthUserData, setUserDataThunk } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    
    this.props.setUserDataThunk();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email
});
export default connect(mapStateToProps, { setAuthUserData, setUserDataThunk })(HeaderContainer);

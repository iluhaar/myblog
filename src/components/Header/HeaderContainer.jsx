import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
        console.log(id, email, login);
      }
    });
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);

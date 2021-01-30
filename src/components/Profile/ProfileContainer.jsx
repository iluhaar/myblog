import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14432;
    }
    this.props.getProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
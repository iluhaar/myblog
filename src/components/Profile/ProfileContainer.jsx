import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    usersAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });  
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

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlProfileContainer
);

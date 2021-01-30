import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersNumber,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preLoader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.currentPage);
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          totalUsersNumber={this.props.totalUsersNumber}
          pageSize={this.props.pageSize}
          users={this.props.users}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersNumber: state.usersPage.totalUsersNumber,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersNumber,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
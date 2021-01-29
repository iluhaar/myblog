import React from "react";
import { connect } from "react-redux";
import {
  follow,
  Unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersNumber,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preLoader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
    // this.props.toggleIsFetching(true);

    // usersAPI
    //   .getUsers(this.props.pageSize, this.props.currentPage)
    //   .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersNumber(data.totalCount);
    //   });
  }
  onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.currentPage);
    this.props.setCurrentPage(pageNumber);


    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          Unfollow={this.props.Unfollow}
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

export default connect(mapStateToProps, {
  follow,
  Unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersNumber,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
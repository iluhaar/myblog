import React from "react";
import { connect } from "react-redux";
import {
  follow,
  Unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersNumber,
  toggleIsFetching,
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/preLoader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersNumber(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
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
  };
};


export default connect(
  mapStateToProps, {
  follow,
  Unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersNumber,
  toggleIsFetching}
)(UsersContainer)
import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  UnfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersNumberAC,
} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  debugger;
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersNumber: state.usersPage.totalUsersNumber,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unFollow: (userID) => {
      dispatch(UnfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersNumber: (totalCount) => {
      dispatch(setTotalUsersNumberAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../temp/img/userPhoto.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersNumber / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p, i) => {
          return (
            <span key={i}
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((userID) => (
        <div key={userID.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + userID.id}>
                <img
                  src={userID.photos.small != null ? userID.photos.small : userPhoto}
                  alt={userID.name}
                />
              </NavLink>
            </div>
            <div>
              {userID.followed ? (
                <button 
                onClick={() => {
                  props.unFollow(userID.id)
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button 
                  onClick={() => {
                    props.follow(userID.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{userID.name}</div>
            </span>
            <div>{userID.status}</div>
            <div>{"userID.city"}</div>
            <div>{"userID.country"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

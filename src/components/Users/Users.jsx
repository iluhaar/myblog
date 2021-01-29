import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../temp/img/userPhoto.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersNumber / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // debugger;
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
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt={u.name}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => {
                  // debugger;
                    props.toggleFollowingProgress(true, u.id)
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "5030c85d-7a02-4610-9ad3-3f802dfecc51",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 1) {
                          props.Unfollow(u.id);
                        }
                    props.toggleFollowingProgress(false, u.id)
                      });
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button 
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "5030c85d-7a02-4610-9ad3-3f802dfecc51",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id)
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
            </span>
            <div>{u.status}</div>
            <div>{"u.city"}</div>
            <div>{"u.country"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

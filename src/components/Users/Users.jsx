import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../temp/img/userPhoto.jpg";

class Users extends React.Component {
  // constructor(props) {
  //   super(props);
  //   if (this.props.users.length === 0) {
  //   }
  // }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersNumber(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil (this.props.totalUsersNumber / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
        {pages.map( p => {
         return <span className={this.props.currentPage === p && s.selectedPage}
         onClick={(e)=> {this.onPageChanged(p);}}>{p}</span>;
        })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt={u.name}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unFollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;

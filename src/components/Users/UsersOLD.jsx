import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../temp/img/userPhoto.jpg"
const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });

    // props.setUsers([
    //     {
    //         id: 1, profilePhoto: 'https://hochu.ua/images/%D0%9A%D0%BE%D0%BB%D1%8F%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B0(4).JPG',
    //         followed: true, fullName: "Vlad", status: 'Never gonna give you up', city: 'Kyiv', country: 'Ukraine'
    //     },
    //     {
    //         id: 2, profilePhoto: 'https://hochu.ua/images/%D0%9A%D0%BE%D0%BB%D1%8F%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B0(4).JPG',
    //         followed: false, fullName: "Alex", status: 'Never gonna let you down', city: 'Dnipro', country: 'Ukraine'
    //     },
    //     {
    //         id: 3, profilePhoto: 'https://hochu.ua/images/%D0%9A%D0%BE%D0%BB%D1%8F%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B0(4).JPG',
    //         followed: true, fullName: "Anton", status: 'Never gonna run around and desert you', city: 'Kharkiv', country: 'Ukraine'
    //     },
    //     {
    //         id: 4, profilePhoto: 'https://hochu.ua/images/%D0%9A%D0%BE%D0%BB%D1%8F%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B0(4).JPG',
    //         followed: false, fullName: "Artem", status: 'Never gonna make you cry', city: 'Minsk', country: 'Belarus'
    //     },
    // ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small:userPhoto} alt={u.name} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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

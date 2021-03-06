import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../temp/img/userPhoto.jpg";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div>
        <img
          src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"
          className={s.logoImg}
          alt="IMG"
        />
        <div className={s.loginBlock}>
          {props.isAuth ? <img className={s.logoAva} src={userPhoto} alt='ava'/> : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </div>
    </header>
  );
};
export default Header;

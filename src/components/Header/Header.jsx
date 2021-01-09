import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
      <img сlassName={s.imgHeader} src="https://miro.medium.com/max/1000/0*wZAcNrIWFFjuJA78" alt="logo" />
      </div>
    </header>
  );
};
export default Header;
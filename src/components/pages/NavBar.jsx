import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "1rem",        

      }}
    >
      <NavLink style={{marginLeft: "1rem"}} to={"/"}>MassageList</NavLink>
      <NavLink style={{marginLeft: "1rem"}} to={"/about"}>About me</NavLink>
    </div>
  );
};

export default NavBar;

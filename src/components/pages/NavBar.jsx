import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem",
      }}
    >
      <Button onClick={() => navigate("/")}>MassageList</Button>
      <Button onClick={() => navigate("/about")}>Ваши данные</Button>
    </div>
  );
};

export default NavBar;

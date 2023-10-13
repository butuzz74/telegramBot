import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import useTelegram from "../../hooks/useTelegram";

const NavBar = () => {
  const navigate = useNavigate();
  const {close} = useTelegram

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem",
      }}
    >
      <Button onClick={() => navigate("/")}>MassageList</Button>
      <Button onClick={() => navigate("/sendform")}>Ваши данные</Button>
      <Button onClick={() => close()}>Выйти</Button>
    </div>
  );
};

export default NavBar;

import React from "react";
import "./button.css";

const Button = ({ onClick, children, type }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

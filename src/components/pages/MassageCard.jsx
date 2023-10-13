import React from "react";
import Button from "../common/Button";

const MassageCard = ({ massage, onClick}) => {

  return (
    <div
      style={{
        width: "80%",
        height:"100%",
        display: "flex",
        flexDirection: "column",
        border: "2px solid #40E0D0",
        borderRadius: "15px",
        padding: "1rem",
        justifyContent: "space-between",
        alignContent: "center",
        textAlign: "center",
        
      }}
    >
      <h2 style={{marginBottom: "0.5rem"}}>{massage.type}</h2>
      <p style={{marginBottom: "0.5rem"}}>{massage.description}</p>
      <Button onClick={() => onClick(massage)}>Cделать заказ</Button>
    </div>
  );
};

export default MassageCard;

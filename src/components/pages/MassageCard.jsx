import React from "react";

const MassageCard = ({massage}) => {
  return (
    <div>
      <h2>{massage.type}</h2>
      <p>{massage.description}</p>
      <button>Cделать заказ</button>
    </div>
  );
};

export default MassageCard;

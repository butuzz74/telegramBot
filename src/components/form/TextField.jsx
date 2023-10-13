import React from "react";

const TextField = ({ id, name, value, onChange, placeholder, type, label }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "1rem"}}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{border: "2px solid #40E0D0", borderRadius: "15px", height: "2rem", textAlign: "center"}}
      />
    </div>
  );
};

export default TextField;

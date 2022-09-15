import React from "react";
import "./input.css";

const Input = ({ label, type, placeholder }) => {
  return (
    <label className="mg-2 flex-column">
      {label}
      <input type={type} placeholder={placeholder} />
    </label>
  );
};

export default Input;

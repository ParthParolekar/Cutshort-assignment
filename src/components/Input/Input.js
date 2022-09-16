import React from "react";
import "./input.css";

const Input = ({
  label,
  type,
  placeholder,
  prefix,
  onChangeHandler,
  setterFunction,
  variableToSet,
  value,
}) => {
  return (
    <label className="mg-2 flex-column">
      <h4>{label}</h4>
      <div className="prefix">
        {prefix && <span>{prefix}</span>}
        <input
          onChange={(e) => onChangeHandler(e, setterFunction, variableToSet)}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </label>
  );
};

export default Input;

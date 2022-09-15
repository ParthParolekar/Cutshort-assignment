import React from "react";
import "./form.css";
import { Input } from "../index";
import { useNavigate } from "react-router-dom";

const Form = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mg-2">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="flex-column form-container">
        <Input label="Name" type="text" placeholder="Steve Jobs" />
        <Input label="Display Name" type="text" placeholder="Steve" />
        <button onClick={() => navigate("/adduser/workspace")}>Next</button>
      </div>
    </div>
  );
};

export default Form;

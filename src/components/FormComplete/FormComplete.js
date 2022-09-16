import React from "react";
import { useNavigate } from "react-router-dom";
import "./formComplete.css";

const FormComplete = ({ setUser, user }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    setUser({
      name: "",
      displayName: "",
      workspaceName: "",
      workspaceURL: "",
      forTeam: false,
    });
    navigate("/");
  };
  return (
    <div>
      <div className="mg-2 form-complete-container">
        <i className="fas fa-check-circle mg-2"></i>
        <h1>Congratulations, {user.name}!</h1>
        <p>You have completed onboarding, you can start using the Eden!</p>
      </div>
      <button onClick={clickHandler}>Complete</button>
    </div>
  );
};

export default FormComplete;

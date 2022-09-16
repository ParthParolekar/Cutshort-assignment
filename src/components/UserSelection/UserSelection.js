import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Progress from "../Progress/Progress";
import "./userSelection.css";

const UserSelection = ({ user, setUser }) => {
  const navigate = useNavigate();
  const personalCardHandler = () => {
    setUser({ ...user, forTeam: false });
  };
  const teamCardHandler = () => {
    setUser({ ...user, forTeam: true });
  };

  return (
    <div>
      <div className="mg-2">
        <Progress current={3} total={4} />
        <h1>How are you planning to use Eden</h1>
        <p>We'll streamline your setup experience accordingly</p>
      </div>
      <div className="flex-column card-form-container">
        <div className="card-container">
          <Card
            active={!user.forTeam}
            icon={<i className="fas fa-user"></i>}
            title="For Myself"
            subtitle="Write better. Think more clearly. Stay Organized."
            clickHandler={personalCardHandler}
          />
          <Card
            active={user.forTeam}
            icon={<i className="fas fa-users"></i>}
            title="With My Team"
            subtitle="Wikis, docs, tasks & projects, all in one place."
            clickHandler={teamCardHandler}
          />
        </div>
        <button onClick={() => navigate("/adduser/complete")}>Next</button>
      </div>
    </div>
  );
};

export default UserSelection;

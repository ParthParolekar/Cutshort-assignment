import React from "react";
import "./card.css";

const Card = ({ active, icon, title, subtitle, clickHandler }) => {
  return (
    <div
      className={active ? "card card-active" : "card"}
      onClick={() => clickHandler()}
    >
      {icon}
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import "./progress.css";

const Progress = ({ current, total }) => {
  const [progress, setProgress] = useState();
  useEffect(() => {
    setProgress(
      Array.from({ length: total }, (item, index) => (
        <div key={index + 1} className={index + 1 <= current ? "active" : ""}>
          {index + 1 !== 1 && <div className="line"></div>}
          <h4>{index + 1}</h4>
          {index + 1 !== total && <div className="line"></div>}
        </div>
      ))
    );
  }, [current]);

  return <div className="progress">{progress}</div>;
};

export default Progress;

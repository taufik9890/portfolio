import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AnimatedCircularProgressbar = ({ targetPercentage, barText }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms
    const stepTime = 15;
    const steps = duration / stepTime;
    const increment = targetPercentage / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetPercentage) {
        start = targetPercentage;
        clearInterval(interval);
      }
      setValue(Math.round(start));
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetPercentage]);
  return (
    <div className="progressbar">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "round",
          textSize: "16px",
          pathTransitionDuration: 0.15,
          pathColor: "#72B626",
          textColor: "#72B626",
          trailColor: "#2B2A2A",
        })}
      />
      <h4>{barText}</h4>
    </div>
  );
};

export default AnimatedCircularProgressbar;

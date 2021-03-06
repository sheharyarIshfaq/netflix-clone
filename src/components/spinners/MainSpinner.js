import React from "react";
import classes from "./MainSpinner.module.css";

const MainSpinner = () => {
  return (
    <div>
      <div className={classes["spinner"]}>
        <div className={classes["rect1"]}></div>
        <div className={classes["rect2"]}></div>
        <div className={classes["rect3"]}></div>
        <div className={classes["rect4"]}></div>
        <div className={classes["rect5"]}></div>
      </div>
    </div>
  );
};

export default MainSpinner;

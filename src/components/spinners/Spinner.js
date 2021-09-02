import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes["sk-chase"]}>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
    </div>
  );
};

export default Spinner;

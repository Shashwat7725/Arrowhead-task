import React from "react";
import "./Filter.css";
import { PiNumberCircleSevenFill } from "react-icons/pi";
const Filter = (props) => {
  return (
    <div className="task-container flex">
      <h1 className="section-heading">{props.difficulty} Task</h1>
      <PiNumberCircleSevenFill className="number-logo" />
    </div>
  );
};

export default Filter;

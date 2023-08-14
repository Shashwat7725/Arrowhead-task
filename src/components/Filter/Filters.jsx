import React, { useState } from "react";
import "./Filter.css";
import { PiNumberCircleSevenFill } from "react-icons/pi";
const Filters = () => {
  const [color, setColor] = useState(false);
  const handleClick = () => {};
  return (
    <div className="filter-section flex">
      <h1 className="filter-title">Filters</h1>
      <ul className="horizontal-scroll flex">
        <li>
          <div className="task-container flex">
            <h1 className="section-heading">Tough Task</h1>
            <PiNumberCircleSevenFill className="number-logo" />
          </div>
        </li>
        <li>
          <div className="task-container flex">
            <h1 className="section-heading">Moderate Task</h1>
            <PiNumberCircleSevenFill className="number-logo" />
          </div>
        </li>
        <li>
          <div className="task-container flex">
            <h1 className="section-heading">Easy Task</h1>
            <PiNumberCircleSevenFill className="number-logo" />
          </div>
        </li>
        <li>
          <div className="task-container flex">
            <h1 className="section-heading">Tough Task</h1>
            <PiNumberCircleSevenFill className="number-logo" />
          </div>
        </li>
        <li>
          <div className="task-container flex">
            <h1 className="section-heading">Easy Task</h1>
            <PiNumberCircleSevenFill className="number-logo" />
          </div>
        </li>
        <li>
          <div className="task-container flex">
            <h1 className="section-heading">Easy Task</h1>
            <PiNumberCircleSevenFill className="number-logo" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Filters;

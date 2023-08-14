import React from "react";
import "./Filter.css";
import Filter from "./Filter";
const Filters = () => {
  return (
    <div className="filter-section flex">
      <h1 className="filter-title">Filters</h1>
      <div className="horizontal-scroll flex">
        <Filter difficulty={`Tough`} />
        <Filter difficulty={`Moderate`} />
        <Filter difficulty={`Easy`} />
        <Filter difficulty={`Easy`} />
        <Filter difficulty={`Tough`} />
      </div>
      {/* <ul className="horizontal-scroll flex">
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
      </ul> */}
    </div>
  );
};

export default Filters;

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
    </div>
  );
};

export default Filters;

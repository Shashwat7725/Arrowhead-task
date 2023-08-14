import React from "react";
import "./organization.css";
import organisation from "../../utils/dummyData";
import Organization from "./Organization";
const Organizations = () => {
  return (
    <section className="organization-section">
      <h1 className="section-heading">Organisations</h1>
      <div className="vertical-scroll">
        {organisation.map((values) => {
          return (
            <Organization img={values.img} companyName={values.companyName} />
          );
        })}
      </div>
    </section>
  );
};

export default Organizations;

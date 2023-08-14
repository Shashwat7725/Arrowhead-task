import React from "react";
import "./organization.css";
import { LuExternalLink } from "react-icons/lu";
const Organization = (props) => {
  return (
    <div className="organization-name flex">
      <img className="org-logo" src={props.img} alt="company logo"></img>
      <h1 className="org-title section-heading">{props.companyName}</h1>
      <LuExternalLink className="link" />
    </div>
  );
};

export default Organization;

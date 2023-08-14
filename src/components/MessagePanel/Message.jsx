import React from "react";
import "./message.css";
import DateInput from "./DateInput";
const Message = (props) => {
  return (
    <div className="message">
      <h1 className="message-index">Message {props.id}</h1>
      <div className="message-content">
        <p className="message-info">Hi [FirstName],</p>
        <p className="message-info">
          I came across [Company name] and was impressed by your innovative
          solutions. As a VC I'm interested in exploring investment
          opportunities with you. Your expertise and market traction caught my
          attention.
        </p>
        <p className="message-info">
          Let's connect and discuss further. Are you available for a meeting on
          [Date]?
        </p>
        <p className="message-info">Best Regards,</p>
        <p className="message-info">[Sender Name]</p>
        <p className="message-info">[Sender Post]</p>
        <p className="message-info">[Sender Email]</p>
        <p className="message-info">[Sender Phone Number]</p>
        <div className="lower-lvl flex">
          {props.id === 1 ? (
            <>
              <h1 className="message-index">Start Date</h1>

              <DateInput />
            </>
          ) : (
            <div className="interval-container flex">
              <h1 className="message-index">Interval</h1>
              <h1 className="message-index">after</h1>
              <input className="interval-input" type="number"></input>
              <h1 className="message-index">days</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;

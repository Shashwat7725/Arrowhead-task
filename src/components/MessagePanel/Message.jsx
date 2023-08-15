import React, { useState, useEffect } from "react";
import "./message.css";
import MarkdownRendered from "./MarkdownRendered";
import DateInput from "./DateInput";
const Message = ({ content, isEditing, onTextAreaChange, id }) => {
  if (isEditing) {
    return (
      <div className="message">
        <textarea
          value={content}
          onChange={onTextAreaChange}
          className="msg-textarea"
        />
      </div>
    );
  }
  return (
    <div className="message">
      <h1 className="message-index">Message {id}</h1>
      <MarkdownRendered content={content} />

      <div className="lower-lvl flex">
        {id === 1 ? (
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
  );
};

export default Message;

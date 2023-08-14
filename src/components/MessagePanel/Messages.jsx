import React, { useState } from "react";
import "./messages.css";
import Message from "./Message";
import organisation from "/src/utils/dummyData.js";

const Messages = () => {
  return (
    <section className="messages-section flex">
      <div className="first-lvl flex">
        <div className="emoji sad flex">
          <span className="emoji-icon">😔</span>
        </div>
        <div className="emoji smile flex">
          <span className="emoji-icon">😄</span>
        </div>
        <button type="button" className="edit-btn">
          Edit
        </button>
      </div>
      <div className="messages-container flex">
        {organisation.map((values) => {
          return (
            <>
              <Message
                id={values.id}
                firstName={values.firstName}
                companyName={values.companyName}
                date={values.date}
                senderName={values.senderName}
                senderPost={values.senderPost}
                senderEmail={values.senderEmail}
                senderPhone={values.senderPhone}
              />
            </>
          );
        })}
      </div>
      <div className="btns flex">
        <div>
          <button className="edit-btn">Save</button>
          <button className="edit-btn">Discard</button>
        </div>
        <span className="btn-effect">
          <a className="a-effect" href="#"></a>
        </span>
      </div>
    </section>
  );
};

export default Messages;

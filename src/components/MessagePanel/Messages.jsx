import React, { useEffect, useState } from "react";
import "./messages.css";
import Message from "./Message";
import organisation from "/src/utils/dummyData.js";

const Messages = () => {
  const [isBlur, setIsBlur] = useState(false);
  const initialMarkdownContent = `
  Hi **[FirstName]**,

  I came across **[Company name]** and was impressed by your innovative solutions. As a VC I'm interested in exploring investment opportunities with you. Your expertise and market traction caught my attention.
  Let's connect and discuss further. Are you available for a meeting on **[Date]**?

  Best Regards,
  
  **[Sender Name]**

  **[Sender Post]**

  **[Sender Email]**

  **[Sender Phone Number]**
  `;
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(initialMarkdownContent);

  const handleClick = () => {
    setIsBlur((prevState) => !prevState);
  };
  const handleSave = () => {
    setIsEditing(false);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleTextAreaChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <section className="messages-section flex">
      <div className="first-lvl flex">
        <div
          className={isBlur ? "emoji sad flex" : "emoji flex"}
          onClick={handleClick}
        >
          <span className="emoji-icon">😔</span>
        </div>
        <div
          className={isBlur ? "emoji flex" : "emoji smile flex"}
          onClick={handleClick}
        >
          <span className="emoji-icon">😄</span>
        </div>
      </div>
      <div className="messages-container flex">
        {organisation.map((values, index) => {
          return (
            <>
              <Message
                key={index}
                id={values.id}
                firstName={values.firstName}
                companyName={values.companyName}
                date={values.date}
                senderName={values.senderName}
                senderPost={values.senderPost}
                senderEmail={values.senderEmail}
                senderPhone={values.senderPhone}
                isEditing={isEditing}
                content={editedContent}
                onTextAreaChange={handleTextAreaChange}
              />
            </>
          );
        })}
      </div>
      <div className="btns flex">
        <div>
          {isEditing ? (
            <button className="edit-btn" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button type="button" className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
        <span className="btn-effect">
          <a className="a-effect" href="#"></a>
        </span>
      </div>
    </section>
  );
};

export default Messages;

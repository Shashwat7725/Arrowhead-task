import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRendered = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRendered;

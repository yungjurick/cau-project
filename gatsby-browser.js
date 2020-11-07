import React from "react";
import App from "./src/components/app";
import "./src/styles/fonts.css";

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>;
};

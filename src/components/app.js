import React from "react";
import GlobalStyle from "../styles/globalStyle";

export default function App({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

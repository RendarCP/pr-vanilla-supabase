import React from "react";
import { responsiveTheme, spacer } from "./style.css";

export default function AssignVars() {
  return (
    <div className={responsiveTheme}>
      <div style={{ border: "1px solid blue" }}>테스트</div>
      <div className={spacer}></div>
      <div style={{ border: "1px solid red" }}>테스트2</div>
      <div className={spacer}></div>
    </div>
  );
}

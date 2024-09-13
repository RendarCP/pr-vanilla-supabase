import React from "react";
import { brandText, themeA, themeB } from "./style.css";

export default function CreateThemeContract() {
  return (
    <>
      <div className={themeA}>
        <h1 className={brandText}>themeA -CreateThemeContract</h1>
      </div>
      <div className={themeB}>
        <h1 className={brandText}>themeB -CreateThemeContract</h1>
      </div>
    </>
  );
}

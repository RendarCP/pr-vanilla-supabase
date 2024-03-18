import React from "react";
import { pink, blue } from "./style.css";
import { accentText } from "./text.css";

export default function CreateVar() {
  return (
    <div>
      <div className={blue}>
        <h1>Setting Variant</h1>
        <div className={pink}>핑크</div>
        <div className={blue}>블루</div>
        <div className={accentText}>블루</div>
      </div>
    </div>
  );
}

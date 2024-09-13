import React from "react";
import { spin, spinAgain } from "./animation.css";

export default function KeyFrames() {
  return (
    <div style={{ padding: 300 }}>
      <h1>KeyFrames</h1>
      <div className={spin}>spin</div>
      <div className={spinAgain}>spinAgain</div>
    </div>
  );
}

import React from "react";
import { color, multiple } from "./style.css";

export default function FallbackVar() {
  return (
    <div>
      <div>
        <h1>fallbackVar</h1>
        <div className={color}>테스트</div>
      </div>
      <div>
        <h1>fallbackVar - multiple</h1>
        <div className={multiple}>테스트</div>
      </div>
    </div>
  );
}

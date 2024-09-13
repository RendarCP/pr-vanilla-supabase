import React from "react";
import { font, multiplefont } from "./style.css";

export default function FontFace() {
  return (
    <div>
      <div>
        <h1 className={font}>fontface</h1>
      </div>
      <div>
        <h1 className={multiplefont}>fontface - multiple</h1>
      </div>
    </div>
  );
}

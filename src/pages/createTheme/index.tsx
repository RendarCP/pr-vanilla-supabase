import React, { useState } from "react";
import { brandText, themeA, themeB } from "./style.css";

export default function CreateTheme() {
  const [theme, setTheme] = useState(themeA);
  return (
    <div className={theme}>
      <h1>createTheme</h1>
      <div className={brandText}>테스트</div>
      <button onClick={() => setTheme(themeA)}>themeA</button>
      <button onClick={() => setTheme(themeB)}>themeB</button>
    </div>
  );
}

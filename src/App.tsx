import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  text,
  brandText,
  container,
  themeClass,
  primary,
  mainContainer,
} from "./styles.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={themeClass}>
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <section className={container}>
          <p className={brandText}>테스트</p>
          <p>테스트2</p>
          <p className={text}>테스트2</p>
          <p className={primary}>테스트3 style composition</p>
        </section>
        <p className={primary}>Style Composition</p>
        <div className={mainContainer}>style merging</div>
      </div>
    </div>
  );
}

export default App;

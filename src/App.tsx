import React from "react";
import logo from "./logo.svg";
import frontendArena from "./frontend-arena-icon.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8">
          <img
            src={frontendArena}
            className=""
            alt="logo"
            width={128}
            height={128}
          />
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width={128}
            height={128}
          />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

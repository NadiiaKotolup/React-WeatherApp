import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://dreamy-pixie-c6b22b.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nadiia Kotolup
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NadiiaKotolup/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/wondrous-cajeta-0f0f14/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

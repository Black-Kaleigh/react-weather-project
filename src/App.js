import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/black-kaleigh"
            target="_blank"
            rel="noreferrer noopener"
          >
            Black Kaleigh{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/Black-Kaleigh/Kaleigh-Vanilla-weather-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            open sourced on GitHub{" "}
          </a>
          and hosted{" "}
          <a
            href="https://app.netlify.com/sites/frabjous-empanada-8965ad/overview"
            target="_blank"
            rel="noreferrer noopener"
          >
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

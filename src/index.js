import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

function About() {
  return <h1>About Page</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

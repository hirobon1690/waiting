import "./App.css";
import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Ticket from "./Ticket";
import Display from "./Display";

const url =
  "https://script.google.com/macros/s/AKfycbyYnUI0O4d7qC7sE83bqYepOKGJBGUvZd5NUgbhYDn1XoBuUYiiNM2gWy880MB2bojoPQ/exec?m=0";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Ticket />} />
      </Routes>
      <Routes>
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;

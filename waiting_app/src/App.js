import "./App.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const url =
  "https://script.google.com/macros/s/AKfycbyYnUI0O4d7qC7sE83bqYepOKGJBGUvZd5NUgbhYDn1XoBuUYiiNM2gWy880MB2bojoPQ/exec?m=1&u=";

function App() {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const id = query.get("id");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    axios.get(url + id).then((res) => {
      setData(res.data);
      console.log(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <div>
          <CircularProgress />
        </div>
      </div>
    );
  } else {
    if (data.length==0) {
      return(
        <div className="App">
          <div>
            <p>無効な整理券ID</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div>
            <h3>整理券</h3>
            <br />
            <p>あなたは</p>
            <h1>{data}</h1>
            <p>番です</p>
          </div>
        </div>
      );
    }
  }
}

export default App;

import "./App.css";
import Button from "@mui/material/Button";
import { React, useState } from "react";
import { useQRCode } from "next-qrcode";
import BasicTable from "./table";

function App() {
  const [data, setData] = useState(0);
  const { Canvas } = useQRCode();
  const [id, setId] = useState(0);

  return (
    <div className="App">
      <BasicTable></BasicTable>
    </div>
  );
}

export default App;

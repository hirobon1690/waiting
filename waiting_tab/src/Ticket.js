import "./App.css";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { React, useState } from "react";
import { useQRCode } from "next-qrcode";
import axios from "axios";

const url =
  "https://script.google.com/macros/s/AKfycbyYnUI0O4d7qC7sE83bqYepOKGJBGUvZd5NUgbhYDn1XoBuUYiiNM2gWy880MB2bojoPQ/exec?m=0";

function Ticket() {
  const [data, setData] = useState(0);
  const { Canvas } = useQRCode();
  const [id, setId] = useState(0);
  const [num, setNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setNum(res.data[0]);
      console.log(res.data);
      setIsLoading(false);
      setId(res.data[1]);
      setData(1);
    });
  };

  if (data === 0) {
    return (
      <div className="App">
        <div>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            disabled={isLoading}
            size="large"
            style={{fontSize: 150}}
          >
            発券する
          </Button>
          {isLoading && <LinearProgress />}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div>
          <h1>あなたは{num}番です</h1>
          <p>QRコードを読み取った画面を閉じずに見せてください</p>
          <Canvas
            text={"http://zephyrus.local:3000/?id=" + id}
            options={{
              level: "M",
              margin: 10,
              scale: 4,
              width: 400,
            }}
          />
          <br />
          <Button
            variant="contained"
            size="large"
            style={{fontSize: 20}}
            onClick={() => {
              setData(0);
            }}
          >
            もどる
          </Button>
        </div>
      </div>
    );
  }
}


export default Ticket;

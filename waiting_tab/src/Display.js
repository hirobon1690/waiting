import "./App.css";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { React, useState } from "react";
import { useQRCode } from "next-qrcode";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";

const url =
  "https://script.google.com/macros/s/AKfycbyYnUI0O4d7qC7sE83bqYepOKGJBGUvZd5NUgbhYDn1XoBuUYiiNM2gWy880MB2bojoPQ/exec?m=2";

function Display() {
  const [isLoading, setIsLoading] = useState(true);
  const [num, setNum] = useState(0);
  const fetchData = () => {
    axios
      .get(url)
      .then((res) => {
        setNum(res.data[0]);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // エラーハンドリング
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(); // 最初の1回だけデータを取得

    // 30秒ごとにデータを更新する
    const intervalId = setInterval(() => {
      fetchData();
    }, 15000);

    // コンポーネントがアンマウントされるときにクリーンアップ
    return () => {
      clearInterval(intervalId);
    };
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
    if (num === undefined) {
      return (
        <div className="App">
          <div>
            <p>呼出中の番号はありません</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div>
            <p>現在の呼出番号は</p>
            <h1>{num}</h1>
            <p>番です</p>
          </div>
        </div>
      );
    }
  }
}

export default Display;

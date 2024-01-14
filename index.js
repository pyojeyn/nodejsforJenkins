const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("01/14 - 깃푸쉬 연동 확인입니당~!!");
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

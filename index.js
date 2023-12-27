const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "안녕하세요! Jenkins 공부를 하기 위해 Node.js 로 서버를 만들었습니다! 그리고 12-27 테스트해봤슈👏🏼"
  );
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

const express = require("express"); //express는 커먼js 문법 써. 이게 임포트하는 문법임
const cors = require("cors");

const app = express(); //이렇게 따로 앱이라 등록해서 씀. convention임.

const port = 3010;

let count = 0;

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello, Express 수정수정!");
}); //저 get은 get요청 경로. 그 다음은 무얼 할지

app.get("/count", (req, res) => {
  count++;

  return res.json({ count: count });
}); //저 get은 get요청 경로. 그 다음은 무얼 할지

app.listen(port, () => {
  console.log(`🛫🚀 Server is listening on port : ${port} `);
});

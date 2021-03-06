var path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const api = require("./api");
app.use(cors());
app.use(express.static("build"));
app.get("/", (req, res) => {
  res.sendFile("build/index.html");
});
app.get("/game/:gameId", (req, res) => {
  res.sendFile( path.join(__dirname,"build/index.html"));
});
app.use("/api", api);
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

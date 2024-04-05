const express = require("express");
const app = express();
app.use(express.static("public"));

const port = 5000;

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(port, () => console.log("Server started on port ${port}"));

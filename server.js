const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/greeting", (req, res) => {
  res.send("Hello, stranger");
});

app.get("/greeting/:name", (req, res) => {
  console.log(req.params);
  res.send(`What's up, ${req.params.name}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

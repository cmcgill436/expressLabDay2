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

//tip calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total;
  const tipPercentage = req.params.tipPercentage / 100;
  const tipAmount = total * tipPercentage;
  res.send(tipAmount.toFixed(2).toString());
});

//magic 8 ball

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  console.log(req.params);
  res.send(
    `<h1>${responses[Math.floor(Math.random() * responses.length)]}</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

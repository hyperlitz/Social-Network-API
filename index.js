const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
  console.log(`Connecting to port ${PORT}!`);
});
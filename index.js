const express = require("express");
const path = require("path");
const fs = require('fs')

const app = express();
const port = process.env.PORT || "8000";


app.get("/", (req, res) => {
    res.status(200).send("Hello from Node API!");
  });


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
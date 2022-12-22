require("dotenv").config(".env");
const express = require("express");
const app = express();
const router = require('../routes/index.router')

app.use("/", router)

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
module.exports = app;
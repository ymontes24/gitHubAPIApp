require("dotenv").config(".env");
const express = require("express");
const cors = require('cors')
const app = express();
const router = require('../routes/index.router')

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*");  
    res.header("X-Content-Type-Options", "no-sniff");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-api-key");
    next();
});
app.use("/", router)

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
module.exports = app;
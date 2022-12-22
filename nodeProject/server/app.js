const express = require("express");
const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
module.exports = app;
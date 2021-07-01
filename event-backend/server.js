const express = require("express");
const routes = require("./routes/routes")
const cors = require("cors")
let port = 3001;

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));

app.use("/", routes);

app.listen(port);
console.log("Listening on port " + port);
module.exports = app;
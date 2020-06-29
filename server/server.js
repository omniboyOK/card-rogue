require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const conn = require("./db/driverMongo");
const routes = require("./routes");
//const session = require("express-session");
//require("./config/auth");
const app = express();

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true}));
app.use(cors());


// en caso de error de conexion con la db
conn.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/rpg/", routes);

app.use("/ping", (req, res) => {
  console.log("POST".red);
  res.status(200).send("pong");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

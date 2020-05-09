const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/




const db = require("./app/models");

/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
*/



var corsOptions = {
  origin: "http://localhost:3000"
};






app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// set port, listen for requests

require("./app/routes/tutorial.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
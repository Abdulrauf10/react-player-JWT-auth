const express = require ("express");
const app = express();
const { PORT = 8000 } = process.env;
const bodyParser = require ("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const passport = require ("./lib/passport");
app.use(passport.initialize());

const router = require ("./router");
app.use(router);

app.listen(PORT, () => { 
  console.log(`server is running in port ${PORT}`)
});
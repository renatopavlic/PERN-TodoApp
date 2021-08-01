require('dotenv').config();
const express = require("express");
const cors = require("cors");


const PORT = process.env.PORT || 8000;
const app = express();

//middlewere
app.use(cors());

app.listen(PORT, () => {
  console.log(`Port listenig on ${PORT}`)
})
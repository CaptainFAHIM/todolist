// imports
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 4000;


// databse connection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true
});

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// server
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});
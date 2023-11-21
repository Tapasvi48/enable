const cors = require('cors');
const express = require('express');
const User=require("./Routes/User")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');

const FormDataModel = require ('./models/FormData');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')



const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(cors({
    origin: 'https://enable-nxc4.vercel.app',
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
  }));

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');


app.use("/api/v1", User);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});



app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});
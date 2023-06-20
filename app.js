//getting env
require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const port = process.env.PORT || 3000
const hbs = require('hbs');
const passport = require('passport');
const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');

const cookieParser = require('cookie-parser')

// connecting to connection.js
// require("./db/connection");

// Add express-session middleware
// app.use(session({
//     secret: process.env.GOOGLE_CLIENT_SECRET,
//     resave: false,
//     saveUninitialized: false
// }));


const { json } = require("express");

// geting defined schema
// const Register = require("./src/models/registers");
// const { default: mongoose } = require('mongoose');


// path to public, templates and partials 
const staticPath = path.join(__dirname, "public");
const templatePath = path.join(__dirname, "templates/views");
const partialPath = path.join(__dirname, "templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Making express to know that the following are present
app.use(express.static(staticPath));
app.use(express.static(templatePath));
app.use(express.static(partialPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(cookieParser());
hbs.registerPartials(partialPath);


// Home page
app.get('/', (req, res) => {
    res.render("index")
});

//events page
app.get('/events',(req,res)=>{
    res.render("comming-soon")
})

//timeline page
app.get('/timeline',(req,res)=>{
    res.render("comming-soon")
})

app.get('/demo',(req,res)=>{
    res.render("demo")
})



//notFound 
app.use(function (req, res, next) {
    res.status(404).render('notfound');
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

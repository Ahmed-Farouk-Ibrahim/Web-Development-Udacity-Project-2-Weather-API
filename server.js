// // Setup empty JS object to act as endpoint for all routes
// projectData = {};

// // Require Express to run server and routes

// // Start up an instance of app

// /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Cors for cross origin allowance

// // Initialize the main project folder
// app.use(express.static('website'));


/*********************************  NEW1   ****************************************************** */

// // // Setup Server

// // Require Express to run server and routes
// const express = require("express");

// // Start up an instance of app
// const app = express();

// // CORS allows us to manage a Cross-origin resource sharing policy so that our front end can talk to the server.
// const cors = require("cors");

// // Enable All CORS Requests
// app.use(cors());

// //body-parser allow the backend to access JSON data sent from the client using request.body in POST route handler.
// const bodyParser = require("body-parser");

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// // Setup empty JS object to act as endpoint for all routes
// projectData = {};

// // Initialize the main project folder
// app.use(express.static("website"));

// // Callback function to complete GET '/all'
// const getAll = (req, res) => res.status(200).send(projectData);
// // GET Route
// app.get("/all", getAll);


// // Callback function to complete POST '/add'
// const postData = (req, res) => {
//     projectData = req.body;
//     console.log(projectData);
//     res.status(200).send(projectData);
//   }
// // GET Route
// app.post("/add", postData);

// const port = 4000;
// const hostname = "127.0.0.1";

// // function to test the server 
// const listening = () =>
// console.log(`Server running at http://${hostname}:${port}/`);

// // spin up the server
// app.listen(port, listening);


/*********************************  NEW2   ****************************************************** */

// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
//Parse application/json
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 4000;

// Spin up the server
app.listen(port, () => {
    console.log(`Your server is erunning on http://localhost:${port}`);
});


// Initialize all route with a callback function:

// 1- GET route
// Callback function to complete GET '/all'
function sendData (request, response) {
    response.status(200).send(projectData);
    // console.log(projectData);
};
// Use our CallBack Function with app.get('/all', ) 
app.get('/all', sendData);


// 2- Post Route
// Callback function to complete POST '/add'
function postMyData(req,res){
    // response.status(port);
    // response.send(projectData);
    // in our request, the body will be the Object {projectData} we made in app.js
    projectData = req.body;
    res.status(200).send(projectData);
    console.log(projectData);
  }
// Create a POST route that uses the url /add and sends the response POST received when used to make a request.
app.post('/add', postMyData);
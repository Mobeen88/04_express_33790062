//Creates a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

//Main page
router.get("/", (req, res) => res.send(`
    <!DOCTYPE html> 
    <html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
        <title> Home </title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <h1>Welcome to My Web Page</h1>
        <p> Hello World! Welcome to nothing so far... </p>
    </body>
    </html>`));

//About page
router.get("/about", (req, res) => res.send(`
    <!DOCTYPE html> 
    <html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
        <title> About </title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <h1> About </h1> 
        <p> Hello this is Mobeen, a third year! <p>
    </body>
    </html>`));

//Contact page
router.get("/contact", (req, res) => res.send(`
    <!DOCTYPE html> 
    <html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
        <title> Contacts </title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <h1> Contacts </h1> 
        <p> Contact me here at mali022@gold.ac.uk <p>
    </body>
    </html>`));

//Date page
router.get("/date", (req, res) => {const date = new Date(); res.send(`
     <!DOCTYPE html> 
    <html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
        <title> Date </title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <h1> The Current date and time: 
        </h1> <p> ${date} </p>
    </body>
    </html>`)});

router.get("/welcome/:name", (req, res) => {const name = req.params.name; res.send(`
        <!DOCTYPE html> 
        <html lang = "en">
        <head>
            <meta charset = "UTF-8">
            <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
            <title> Welcome ${name} </title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1> Welcome ${name} </h1>
        </body>
        </html>`)
});

router.get("/chain", (req, res, next) => { req.message = "Hello World!"; next(); },
    (req, res) => {
        console.log("Second Route Handler"); res.send(`
        <!DOCTYPE html> 
        <html lang = "en">
        <head>
            <meta charset = "UTF-8">
            <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
            <title> Chain </title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1> Chain </h1>
            <p>${req.message}</p>
            <p>This response came from the second handler!</p>
        </body>
        </html>`)
});

// Export the router object so index.js can access it
module.exports = router;

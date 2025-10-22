//Setting up express
const express = require("express");
const app = express();

//Adding CSS styling
const path = require("path")

//The port number where server listens to requests
const port = 8000;

//// Handeling routes ////

//Tells express to use the CSS file
app.use(express.static(path.join(__dirname, "")));

//Load route handlers
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

//Start Listeining for HTTP requests
app.listen(port, () => console.log(`Node server is running on port ${port}...`))
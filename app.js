const express = require("express");
const app = express();

//Middlewares
app.use(express.json());

// Serve frontend files
app.use(express.static("public"));

const userRoutes = require("./Routes/userRoutes");
app.use("/api/users", userRoutes);

module.exports = app;

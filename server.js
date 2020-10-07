// Dependencies
// ==========================================

const express = require("express");
const path = require("path");

const http = require("http");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Data
// =============================================

const tables = []
const reserve = []

// Routes 
// ============================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/tables", function(req, res) {
    return res.json(tables);
})

app.get("/reserve", function(req, res) {
    return res.json(reserve);
})


app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

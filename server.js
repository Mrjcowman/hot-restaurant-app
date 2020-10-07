// Dependencies
// ==========================================

const express = require("express");
const path = require("path");

const http = require("http");

const app = express();
const PORT = 3000;
const maxTables = 5

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Data
// =============================================

const tables = []
const reserves = []

// Routes 
// ============================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/index.html"))
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/tables.html"))
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/reserve.html"))
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
})

app.get("/api/reserve", function(req, res) {
    return res.json(reserves);
})

// Post Requests
// =========================================================

app.post("/api/reserve"), function(req, res) {

    var newTable = req.body;

    console.log(newTable);

    if (tables.length < maxTables) {
        tables.push(newTable);
    } else {
        reserves.push(newTable);
    }

    res.json(newTable)
}


// Starts the server to begin listening
// ======================================================================

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

const express = require("express")
const app = express();
const PORT = 4000;
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("HELLO")
})

app.listen(PORT, (req, res) => {
    console.log("We are listening on port: ", PORT);
})
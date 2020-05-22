const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config.env" });

const app = express();

// Dev logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Profile routes
app.use("/api/v1/profile", require("./routes/profile"));

// app.get("/api/v1/profile/:platform/:gamertag", (req, res) => {
//     console.log(req.params.platform, req.params.gamertag);
//     res.send("Hello");
// });

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`);
});
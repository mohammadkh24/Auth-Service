const express = require("express");
const docRoutes = require("./document/swagger.routes");
const authRoutes = require("./routes/auth")

const app = express();

// Req.body
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb" }));

// Routes
app.use("/document" , docRoutes)
app.use("/auth" , authRoutes)

// Not-Found Page
app.use((req,res) => {
    return res.status(404).json({
        message : "404! Path not found"
    })
})

module.exports = app
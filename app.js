const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// API Route to Return Banner Details (JSON Response)
app.get("/api/banner", (req, res) => {
    console.log(__dirname); // Logs the directory
    res.json({
        imageUrl: "https://www.jobma.com/new-images/email-template/email-header-bg-img.jpg",
        link: "https://www.jobma.com/login",
        altText: "Special Offer Banner",
        width: req.query.width || "1300px",
        height: req.query.height || "400px",
        position: req.query.position || "bottom-right"
    });
});

// Route to Serve HTML File
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

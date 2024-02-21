const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 4000;

const imagesDirectory = path.join(__dirname, "images");

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hey, this is my Image API 📷");
});

app.get("/api/random-image", (req, res) => {
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const randomImage = files[Math.floor(Math.random() * files.length)];
    const imagePath = path.join(imagesDirectory, randomImage);
    res.sendFile(imagePath);
  });
});

module.exports = app;

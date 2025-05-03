const express = require("express");
const serverless = require("serverless-http");
const fs = require("fs");
const path = require("path");

const app = express();

// Local image directory path
const imagesDir = path.join(__dirname, "..", "public", "images");
// Read all image filenames on startup
const images = fs
  .readdirSync(imagesDir)
  .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f));

app.get("/", (req, res) => {
  if (images.length === 0) {
    return res.status(404).send("No images found");
  }

  // Select a random image
  // const randomImage = images[Math.floor(Math.random() * images.length)];
  // Use timestamp for pseudo-random selection
  const randomImage = images[Math.floor(Date.now() / 1000) % images.length];

  const imagePath = path.join(imagesDir, randomImage);

  // Return file directly
  res.sendFile(imagePath);
});

// Local development
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Server listening on http://localhost:${port}`);
  });
}

// Export
module.exports = app;
module.exports.handler = serverless(app);

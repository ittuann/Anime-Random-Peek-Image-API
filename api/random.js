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

  let selectedImage;
  // Check for the existence of parameters
  if (req.query.img && images.includes(req.query.img)) {
    // If a valid image name parameter is provided, the specified image is used
    selectedImage = req.query.img;
  } else {
    // Default randomly selects an image

    // const selectedImage = images[Math.floor(Math.random() * images.length)];
    // Use timestamp for pseudo-random selection
    selectedImage = images[Math.floor(Date.now() / 1000) % images.length];
  }

  const imagePath = path.join(imagesDir, selectedImage);

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

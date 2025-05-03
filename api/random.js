const express = require("express");
const serverless = require("serverless-http");
const fs = require("fs");
const path = require("path");

const app = express();

// 本地图片路径
const imagesDir = path.join(__dirname, "..", "public", "images");
// 启动时读取所有图片文件名
const images = fs
  .readdirSync(imagesDir)
  .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f));

app.get("/", (req, res) => {
  if (images.length === 0) {
    return res.status(404).send("No images found");
  }

  // 随机选一张
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const imagePath = path.join(imagesDir, randomImage);

  // 直接返回文件
  res.sendFile(imagePath);
});

// Local development
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Server listening on http://localhost:${port}`);
  });
}

// 导出
module.exports = app;
module.exports.handler = serverless(app);

const express = require("express");

const { renderImages, deleteImage } = require("../controller/image");

const imageRouter = express.Router();
//main route is image
imageRouter.get("/renderAll", renderImages);
imageRouter.delete("/deleteImage/:id", deleteImage);

module.exports = imageRouter;

const express = require('express');
const musicController = require('../controllers/music.controller');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
});

const route = express.Router();

route.post('/upload', upload.single("music"), musicController.createMusic);
route.post('/album', musicController.createAlbum);

module.exports = route;
const express = require('express');
const musicController = require('../controllers/music.controller');
const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middleware');

const upload = multer({
    storage: multer.memoryStorage()
});

const route = express.Router();

route.post('/upload', authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
route.post('/album', authMiddleware.authArtist, musicController.createAlbum);

route.get('/', authMiddleware.authUser, musicController.getAllMusics);
route.get('/albums', authMiddleware.authUser, musicController.getAllAlbums);
route.get('/albums/:albumId', authMiddleware.authUser, musicController.getAlbumById);

module.exports = route;
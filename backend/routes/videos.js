const express = require('express');
const multer = require('multer');
const Video = require('../models/Video');
const router = express.Router();

// Storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Upload video
router.post('/upload', upload.single('video'), async (req, res) => {
  const video = new Video({ filename: req.file.filename });
  await video.save();
  res.status(201).json(video);
});

// Get videos
router.get('/', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

module.exports = router;

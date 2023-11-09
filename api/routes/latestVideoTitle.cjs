const express = require('express');
const router = express.Router();

let latestVideoTitle = '';

router.get('/', (req, res) => {
    res.json({ latestVideoTitle });
});

router.post('/', (req, res) => {
    const { videoTitle } = req.body;
    latestVideoTitle = videoTitle;
    res.json({ success: true });
});

module.exports = router;
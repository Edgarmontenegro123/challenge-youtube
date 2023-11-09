const express = require('express');
const router = express.Router();

let visitCount = 0;

router.get('/', (req, res) => {
    visitCount++;
    res.send(`${visitCount}`);
});

module.exports = router;
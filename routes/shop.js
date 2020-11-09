const path = require('path')

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    // path.join() Detects SO and create absolute path and concatenate in segments the file and folder you looking for
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router
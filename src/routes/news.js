const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//path /news/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;

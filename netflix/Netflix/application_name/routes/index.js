const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');

const indexController = require('../controllers/indexController');


router.get('/', authMiddleware.validToken);
router.get('/about', indexController.about);
router.get('/adminonly', authMiddleware.validToken, authMiddleware.isAdmin, indexController.adminonly);

module.exports = router;


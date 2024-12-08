const express = require('express');
const router = express.Router();

const accessController = require('../controllers/userAcces.controller')
router.get('/main', accessController.mainForm);
router.post('/main', accessController.main);
router.get('/login', accessController.loginForm);
router.post('/login', accessController.login);
router.get('/register', accessController.registerForm);
router.post('/register', accessController.register);

router.get('/logout', accessController.logout);

module.exports = router;

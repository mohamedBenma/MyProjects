var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
// import controller for object
const objectController = require('../controllers/objectController');
router.get('/',authMiddleware.validToken,objectController.list);
router.get('/objectData/:objectId', objectController.objectData);
router.get('/create', objectController.createForm);
router.post('/create', objectController.create );
router.put('/buy/:objectId', objectController.buyItem );
module.exports = router;

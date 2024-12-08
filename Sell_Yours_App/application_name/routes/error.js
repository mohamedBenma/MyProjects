var express = require('express');
var router = express.Router();


const errorController=require('../controllers/errorController')
router.use(errorController.notFound);
router.use(errorController.handleError)
module.exports = router;

var express = require('express');
var router = express.Router();
var add_otp = require('../controller/otp_controller')

/* GET home page. */
router.post('/insert', add_otp.insert);


router.post('/verifyotp', add_otp.verifyotp);

module.exports = router;

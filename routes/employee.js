const express = require('express')
const router = express.Router()

const auth = require(__base + 'modules/auth/protect.js');

//Fetch all applications
router.get('/lines', require(__base + 'modules/employee/applications'));

router.post('/andro-apps', require('../modules/employee/andro'))

//Update Status
router.post('/updatestatus', auth, require('../modules/employee/updateStatus'))

router.post('/verified', auth, require('../modules/employee/verified'))

router.post('/notverified', auth, require('../modules/employee/notverified'))

module.exports = router;

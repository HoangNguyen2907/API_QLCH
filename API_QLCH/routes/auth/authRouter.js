const {Router} = require('express');
const authController = require('./authController');
const router = Router();


router.post('/register', authController.registerEmployees)
router.post('/register/owner', authController.registerOwner)

module.exports = router;

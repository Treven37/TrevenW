const express = require('express');
const router = express.Router();
const protected = require('../middleware/authMiddle');
const userController = require('../controllers/userController');

router.get('/getPublicData', userController.getPublicData);
router.post('/getPrivateData', protected, userController.getPrivateData);
router.post('/updateData', protected, userController.updateData);

module.exports = router; 
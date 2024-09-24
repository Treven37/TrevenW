const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.get('/a', async (req, res) => {
	res.status(200).json({'hi': 'hi'});
});
router.post('/a', aiController.a);
router.post('/b', aiController.b);
router.get('/c', aiController.c);

module.exports = router
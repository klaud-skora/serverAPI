const express = require('express');
const router = express.Router();

const SeatController = require('../controllers/seats.controller');

router.get('/seats', SeatController.getAll);
  
router.get('/seats/:id', SeatController.getId);

router.post('/seats', SeatController.postDoc);
  
router.delete('/seats/:id', SeatController.deleteId);
  
router.put('seats/:id', SeatController.putId);

module.exports = router;
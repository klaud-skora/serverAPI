const express = require('express');
const router = express.Router();

const ConcertController = require('../controllers/concerts.controller');

router.get('/concerts', ConcertController.getAll);
  
router.get('/concerts/:id', ConcertController.getId);
  
router.post('/concerts', ConcertController.postDoc);
  
router.delete('/concerts/:id', ConcertController.deleteId);
  
router.put('/concerts/:id', ConcertController.putId);
  
module.exports = router;
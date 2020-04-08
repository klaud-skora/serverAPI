const express = require('express');
const router = express.Router();

const TestimonialController = require('../controllers/testimonials.controller');

router.get('/testimonials', TestimonialController.getAll);

router.get('/testimonials/random', TestimonialController.getRandom);
  
router.get('/testimonials/:id', TestimonialController.getId);
  
router.post('/testimonials', TestimonialController.postDoc);
  
router.put('/testimonials/:id', TestimonialController.putId);
  
router.route('/testimonials/:id').delete((req, res) => {
  
  db.testimonials = db.testimonials.filter((element) => {
    return element.id != req.params.id;
  });
  res.json({message: 'OK'});
});

module.exports = router;
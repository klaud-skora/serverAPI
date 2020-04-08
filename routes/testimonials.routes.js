// const express = require('express');
// const router = express.Router();
// const db = require('../db');

// router.route('/testimonials').get((req, res) => {
//   res.json(db.testimonials);
// });

// router.route('/testimonials/random').get((req, res) => {
//   const arrayElement = Math.floor(Math.random() * db.testimonials.length);
//   res.json(db.testimonials[arrayElement])
// });
  
// router.route('/testimonials/:id').get((req, res) => {
//   let arrayElement;
//   for(let element of db.testimonials) {
//     if(element.id == req.params.id) {
//       arrayElement = element.id - 1;
//     }
//   }
//   res.json(db.testimonials[arrayElement]);
// });
  
// router.route('/testimonials').post((req, res) => {
  
//   const { author, text } = req.body; 
//   if(author && text) {
//     db.testimonials.push({ id: uuid().replace(/[^0-9,.]+/g, ""), author: author, text: text });
//     res.json({message: 'OK'});
//   } else {
//     res.json({message: 'Please, add needed data'});
// }
// });
  
// router.route('/testimonials/:id').put((req, res) => {
    
//   const { author, text } = req.body; 

//   if(author || text) {
//     for(let element of db.testimonials) {
//       if(element.id == req.params.id) {
//         element.author = req.body.author;
//         element.text = req.body.text;
//       }
//     }
//     res.json({message: 'OK'});
//   } else {
//       res.json({message: 'Put data you want to be changed'});
//   }
  
// });
  
// router.route('/testimonials/:id').delete((req, res) => {
  
//   db.testimonials = db.testimonials.filter((element) => {
//     return element.id != req.params.id;
//   });
//   res.json({message: 'OK'});
// });

// module.exports = router;
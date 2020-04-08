// const express = require('express');
// const router = express.Router();
// const db = require('../db');

// /* concerts */
// router.route('/concerts').get((req, res) => {
//   res.json(db.concerts);
// });
  
// router.route('/concerts/:id').get((req, res) => {
//   let arrayElement;
//   for(let element of db.concerts) {
//     if(element.id == req.params.id) {
//       arrayElement = element.id - 1;
//     }
//   }  
//   res.json(db.concerts[arrayElement]);
// });
  
// router.route('/concerts').post((req, res) => {
//   const { performer, genre, price, day } = req.body;
  
//   if(performer && day) {
//     db.concerts.push({ id: uuid().replace(/[^0-9,.]+/g, ''), performer: performer, genre: genre, price: price, day: day });
//     res.json({message: 'OK'});
//   } else {
//     res.json({message: 'Please, add needed data'});
//   }
// });
  
// router.route('/concerts/:id').delete((req, res) => {
  
//   db.concerts = db.concerts.filter((element => {
//     return element.id != req.params.id;
//   }));
//   res.json({message: 'OK'});
// });
  
// router.route('/concerts/:id').put((req, res) => {
    
//   const { performer, genre, price, day } = req.body;

//   if(performer || genre || price || day) {
//     for(let element of db.concerts) {
//       if(element.id == req.params.id) {
//         element.performer = req.body.performer;
//         element.genre = req.body.genre;
//         element.price = req.body.price;
//         element.day = req.body.day;
//         element.info = req.body.info;
//       }
//     }
//     res.json({message: 'OK'});
//   } else {
//     res.json({message: 'Put data you want to change'});
//   }
// });
  
// module.exports = router;
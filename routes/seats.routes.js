// const express = require('express');
// const router = express.Router();
// const db = require('../db');
// const { v4: uuid } = require('uuid');

// router.route('/seats').get((req, res) => {
//   res.json(db.seats);
// });
  
// router.route('/seats/:id').get((req, res) => {
//   let arrayElement;
//   for(let element of db.seats) {
//     if(element.id == req.params.id) {
//       arrayElement = element.id - 1;
//     }
//   }
  
//   res.json(db.seats[arrayElement]);
// });

// router.route('/seats').post((req, res) => {
//   const { day, seat, client, email } = req.body;

//     if(day && seat && email && client) {
//       if(db.seats.some((element => { return (element.seat == seat && element.day == day)}))) {
//         res.json({message: "The slot is already taken..."});
//       } else {
//         db.seats.push({ id: uuid().replace(/[^0-9,.]+/g, ''), day: day, seat: seat, client: client, email: email });
//         req.io.emit('seatsUpdated', db.seats);
//         res.json({message: 'OK'});
//       }
//     } else {
//       res.json({message: 'Please, add needed data'});
//     }
// });
  
// router.route('/seats/:id').delete((req, res) => {
//   db.seats = db.seats.filter((element => {
//     return element.id != req.params.id;
//   }));
//   res.json({message: 'OK'});
// });
  
// router.route('seats/:id').put((req, res) => {

//   const { day, seat, client, email } = req.body;

//   if(day || seat || client || email) {
//     for(let element of db.seats) {
//       if(element.id == req.params.id) {
//         element.day = req.body.day;
//         element.seat = req.body.seat;
//         element.client = req.body.client;
//         element.email = req.body.email;
//       }
//     }
//     res.json({message: 'OK'});
//   } else {
//     res.json({message: 'Put data you want to change'});
//   }  
// });

// module.exports = router;
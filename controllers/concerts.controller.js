const Concert = require('../models/concert.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Concert.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const concert = await Concert.findById(req.params.id);
    if(!concert) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      res.json(concert);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getPerformer = async (req, res) => {
  try {
    const concerts = await Concert.find({ performer: req.params.performer });
    if(!concerts.length) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      res.json(concerts);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getGenre = async (req, res) => {
  try {
    const concerts = await Concert.find({ genre: req.params.genre });
    if(!concerts.length) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      res.json(concerts);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getPrice = async (req, res) => {
  try {
    const concerts = await Concert.find({ price: {$gte: req.params.price_min, $lte: req.params.price_max} });
    if(!concerts.length) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      res.json(concerts);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getConcertByDay = async (req, res) => {
  try {
    const concerts = await Concert.find({ day: req.params.day });
    if(!concerts.length) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      res.json(concerts);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};


exports.postDoc = async (req, res) => {
  
  const { performer, genre, price, day, image } = req.body;
  try {
    const newConcert = new Concert({ performer: performer, genre: genre, price: price, day: day, image: image });
    await newConcert.save();
    res.json({ message: 'OK' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteId = async (req, res) => {
  try {
    const concert = await Concert.findById(req.params.id);
    if(!concert) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      await Concert.deleteOne({ _id: req.params.id});
      res.json({ message: 'OK' });
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.putId = async (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  try {
    const concert = await Concert.findById(req.params.id);
    if(!concert) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      await Concert.updateOne({ _id: req.params.id }, { $set: { performer: performer, genre: genre, price: price, day: day, image: image } });
      res.json({ message: 'OK' });
    } 
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
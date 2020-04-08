const Testimonial = require('../models/testimonial.model');

exports.getAll = async (req, res) => {
  try {
    res.json( await Testimonial.find() );
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
}

exports.getRandom = async (req, res) => {
  try {
    const count = await Testimonial.find().countDocuments();
    const random = Math.floor(Math.round() * count);
    const testimonial = await Testimonial.findOne().skip(random);
    if(!testimonial) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      res.json(testimonial);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
}

exports.getId = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if(!testimonial) {
      res.status(404).json({ message: 'Not found' });
    }
    else {
      res.json(testimonial);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
}

exports.postDoc = async (req, res) => {
  const { author, text } = req.body;
  try {
    const newTestimonial = new Testimonial({ author: author, text: text });
    await newTestimonial.save();
    res.json({ mnessage: 'OK' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
}

exports.putId = async (req, res) => {
  const { author, text } = req.body;
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if(!testimonial) res.status(404).json({ message: 'Not found' });
    else {
      await Testimonial.updateOne({ _id: req.params.id}, {$set: { author: author, text: text } });
      res.json({ message: 'OK' });
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
}
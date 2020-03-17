const express = require('express');
const uuid = require("uuid/v4")
const db = require('./db');
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.router');
const seatsRoutes = require('./routes/seats.routes');

const app = express();

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.use((req, res) => {
  res.status(404).json({message: 'Not found...'});
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
})
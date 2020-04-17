const server = require('../../../server');
const Concert = require('../../models/concert.model');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('Concerts for GET /api/concerts/...', () => {
  
  before(async () => {
    try {
      const concertOne = new Concert({ performer: 'John Doe', genre: 'Rock', price: 100, day: 1, image: 'images/image/john.png' });
      await concertOne.save();

      const concertTwo = new Concert({ performer: 'Amanda', genre: 'Pop', price: 120, day: 1, image: 'images/image/amanda.png' });
      await concertTwo.save();

      const concertThree = new Concert({ performer: 'Locks', genre: 'Pop', price: 70, day: 2, image: 'images/image/locks.png' });
      await concertThree.save();
    }
    catch(err) {
      console.log(err);
    }
  });

  after(async () => {
    try {
      await Department.deleteMany()
      // require(server).stop();
    } catch(err) {
      console.log(err);
    }
  });

  it('should return all Amanda\'s concerts', async () => {
    try {
      const res = request(server).get('/concerts/performer/Amanda');

      const resEmpty = request(server).get('/concerts/performer/Dama');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.not.be.null;
      expect(res.body.length).to.be.equal(1);

      expect(resEmpty.status).to.be.equal(404);
      expect(resEmpty.body).to.be.null;
      expect(resEmpty.body.length).to.be.equal(0);
    }
    catch(err) {
      console.log(err);
    }
  });

  it('should return all Rock concerts', async () => {
    try {
      const res = request(server).get('/concerts/genre/Pop');
      const resEmpty = request(server).get('/concerts/genre/ska');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.not.be.null;
      expect(res.body.length).to.be.equal(2);

      expect(resEmpty.status).to.be.equal(404);
      expect(resEmpty.body).to.be.null;
      expect(resEmpty.body.length).to.be.equal(0);
    }
    catch(err) {
      console.log(err);
    }
  });

  it('should return all concerts in good price', async () => {
    try {
      const res = request(server).get('/concerts/price/50/100');
      const resEmpty = request(server).get('/concerts/price/0/50');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.not.be.null;
      expect(res.body.length).to.be.equal(2);

      expect(resEmpty.status).to.be.equal(404);
      expect(resEmpty.body).to.be.null;
      expect(resEmpty.body.length).to.be.equal(0);
    }
    catch(err) {
      console.log(err);
    }
  });

  it('should return all concerts in first day', async () => {
    try {
      const res = request(server).get('/concerts/day/1');
      const resEmpty = request(server).get('/concerts/day/3');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.not.be.null;
      expect(res.body.length).to.be.equal(2);

      expect(resEmpty.status).to.be.equal(404);
      expect(resEmpty.body).to.be.null;
      expect(resEmpty.body.length).to.be.equal(0);
    }
    catch(err) {
      console.log(err);
    }
  });

});

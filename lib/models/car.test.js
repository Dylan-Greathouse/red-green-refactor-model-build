const fs = require('fs');
const pool = require('../utils/pool');
const Car = require('./Car');

 // it('creates a car', async () => {
  //   const car = await Car.insert(...)

  //   expect(car).toEqual(...)
  // })


describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });

  it('this test should check if the insert function works', async () => {
    const car = await Car.insert()


    expect(car).toEqual()
  })

  

  afterAll(() => {
    return pool.end();
  });
});

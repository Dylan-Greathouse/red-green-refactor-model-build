const fs = require('fs');
const pool = require('../utils/pool');
const Car = require('./Car');

// it('creates a car', async () => {
//   const car = await Car.insert(...)

//   expect(car).toEqual(...)
// })

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(
      fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8')
    );
  });

  it('this test should check if the insert function works', async() => {
    const car = await Car.insert({
      make: 'Hyundai',
      model: 'Ioniq',
      year: 2019,
    });

    expect(car).toEqual({
      id: expect.any(String),
      make: expect.any(String),
      model: expect.any(String),
      year: expect.any(Number)
    });
  });

  it('this test should check if the findByid function works', async() => {
    await Car.insert({
      make: 'Hyundai',
      model: 'Ioniq',
      year: 2019,
    });

    const carFind = await Car.findById(1);
 

    expect(carFind).toEqual({
      id: expect.any(String),
      make: expect.any(String),
      model: expect.any(String),
      year: expect.any(Number)
    });
  });

  it('this test should check if the findByid function works', async() => {
    const car1 = await Car.insert({
      make: 'Hyundai',
      model: 'Ioniq',
      year: 2019,
    });

    const car2 = await Car.insert({
      make: 'Hyundai',
      model: 'Ioniq',
      year: 2020,
    });

    const carGet = await Car.findCars();
    console.log(car1, car2);

    expect(carGet).toEqual([{
      id: expect.any(String),
      make: expect.any(String),
      model: expect.any(String),
      year: expect.any(Number)
    },
    {
      id: expect.any(String),
      make: expect.any(String),
      model: expect.any(String),
      year: expect.any(Number)
    }
    ]);
  });

  it('this test should check if the patchId function works', async() => {
    await Car.insert({
      make: 'Hyundai',
      model: 'Ioniq',
      year: 2019,
    });

    const carPatch = await Car.patchId({
      make: 'Hyundai',
      model: 'Ioniq',
      year: 2020,
    });


    expect(carPatch).toEqual({
      id: expect.any(String),
      make: expect.any(String),
      model: expect.any(String),
      year: expect.any(Number)
    });
  });

  it('This test should check if delete works ', async() => {
    await Car.insert({
      make: 'Hyundai',
      model: 'Ioniq',
      year: 2019,
    });

    const carDelete = await Car.deleteId(1);
   
    expect(carDelete).toEqual({});
  });


  afterAll(() => {
    return pool.end();
  });
});

const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;
  let dinosaur7;
  let dinosaurs;
  let park;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Giganotosaurus', 'carnivore', 60);
    dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 40);
    dinosaur4 = new Dinosaur('Velociraptor', 'carnivore', 40);
    dinosaur5 = new Dinosaur('Velociraptor', 'carnivore', 40);
    dinosaur6 = new Dinosaur('Diplodocus', 'herbivore', 50);
    dinosaur7 = new Dinosaur('Diplodocus', 'herbivore', 50);

    dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5, dinosaur6, dinosaur7];

    park = new Park('Jurassic Park', 20, dinosaurs);

  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});

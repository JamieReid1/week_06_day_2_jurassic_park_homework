
const Park = function(name, ticketPrice, dinosaurs = []) {

  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;


  Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
  };

  Park.prototype.deleteDinosaur = function(dinosaur) {
   const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
  };

  Park.prototype.mostAttractiveDinosaur = function() {
    const nums = this.dinosaurs.map(dinosaur => dinosaur.guestsAttractedPerDay);
    const maxNum = Math.max(...nums);
    for (dinosaur of this.dinosaurs) {
      if (dinosaur.guestsAttractedPerDay === maxNum) {
        return dinosaur;
      };
    };
  };

  Park.prototype.findDinosaurBySpecies = function(species) {
    const foundDinosaur = this.dinosaurs.filter(dinosaur => dinosaur.species === species);
    return foundDinosaur;
  };

};

module.exports = Park;

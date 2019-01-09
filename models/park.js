
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
    const foundDinosaur = this.dinosaurs.filter(dinosaur => dinosaur.guestsAttractedPerDay === maxNum);
    return foundDinosaur;
  };

  Park.prototype.findDinosaurBySpecies = function(species) {
    const foundDinosaur = this.dinosaurs.filter(dinosaur => dinosaur.species === species);
    return foundDinosaur;
  };

  Park.prototype.deleteDinosaurSpecies = function(species) {
    const foundDinosaur = this.findDinosaurBySpecies(species);
    for (dinosaur of foundDinosaur) {
      this.deleteDinosaur(dinosaur);
    };
  };

};

module.exports = Park;

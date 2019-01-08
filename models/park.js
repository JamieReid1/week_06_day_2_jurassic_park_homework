
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

};

module.exports = Park;

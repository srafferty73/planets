const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  console.log(this.planets);
  PubSub.publish('Planets:all-planets-ready', this.planets);

  PubSub.subscribe('Planets:detail-view', (evt) => {

  });
};

module.exports = SolarSystem;

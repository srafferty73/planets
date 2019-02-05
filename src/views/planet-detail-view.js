const PubSub = require('../helpers/pub_sub.js');

const PlanetDetailView = function () {

};

PlanetDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:all-planets-ready', (evt) => {

  });
};

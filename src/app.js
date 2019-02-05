const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('planets-menu');
  const solarSystem = new SolarSystem(planetsData);
  console.log(solarSystem.planets);
  solarSystem.bindEvents();

});

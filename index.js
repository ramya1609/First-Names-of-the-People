const peopleName = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");

const getPeopleInCity = function (peopleName) {
  return firstName(peopleName);
};

module.exports = getPeopleInCity;

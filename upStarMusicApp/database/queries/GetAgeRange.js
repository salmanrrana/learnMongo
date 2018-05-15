const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const minQuery = Artist
  //search whole database and return values
    .find({})
  //sort by the age. 1 means to do in ascending order
    .sort({ age: 1 })
  //only want to get back very first artist since they will have minimum age
    .limit(1)
    //since we only care about the artist ages, we need to pull it about
    //the code above returns an array and the code immediate below gives us the age
    .then(artists => artists[0].age);

//this code is for the maxage
  const maxQuery = Artist
    .find({})
    .sort({ age: -1 })
    .limit(1)
    .then(artists => artists[0].age);

    return Promise.all([ minQuery, maxQuery])
      .then((result) => {
        return { min: result[0], max: result[1] };
      })
};

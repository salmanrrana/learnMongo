const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
 module.exports = () => {
   const minQuery = Artist
   //search whole database and return values
     .find({})
   //sort by the yearsActive. 1 means to do in ascending order
     .sort({ yearsActive: 1 })
   //only want to get back very first artist since they will have minimum yearsActive
     .limit(1)
     //since we only care about the artist yearsActives, we need to pull it about
     //the code above returns an array and the code immediate below gives us the yearsActive
     .then(artists => artists[0].yearsActive);

 //this code is for the maxyearsActive
   const maxQuery = Artist
     .find({})
     .sort({ yearsActive: -1 })
     .limit(1)
     .then(artists => artists[0].yearsActive);

     return Promise.all([ minQuery, maxQuery])
       .then((result) => {
         return { min: result[0], max: result[1] };
       })
 };

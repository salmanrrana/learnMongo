const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
  //my solution but stephen said not to use because this is touching our database twice
  //this will take "twice" as long since we are touching the db twice
  // const artist = Artist.findById(_id);
  // return artist.remove();

  //stephen solution 1 - ONE STEP!!!
  return Artist.remove({ _id });
};

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/users_test', { useMongoClient: true });
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', () => {
      console.warn('Warning: ', error);
    });
});


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //ready to run the next test!
    done();
  });
});

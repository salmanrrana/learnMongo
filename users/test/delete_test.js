const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe'});
    joe.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    joe.remove()
    //this code below is doing the check to make sure the function above worked
      .then(() => User.findOne({ user: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', (done) => {
    //remove a bunch of records that meet a given criteria
    User.remove({ name: 'Joe'})
    //this code below is doing the check to make sure the function above worked
      .then(() => User.findOne({ user: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class mehtod findAndRemove', (done) => {
    User.findOneAndRemove({ name: 'Joe' })
    //this code below is doing the check to make sure the function above worked
      .then(() => User.findOne({ user: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove(joe._id)
    //this code below is doing the check to make sure the function above worked
      .then(() => User.findOne({ user: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
});

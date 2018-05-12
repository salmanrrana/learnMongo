const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
  it('saves a user', () => {
    //step 1 create new instance of a user
    const joe = new User({ name: 'Joe' })
    //step 2 saves the user
    joe.save()
    //step 3 verify it saves
      .then(() => {
        //has joe been saves successfully
        assert(!joe.isNew);
        done();
      });
  });
});

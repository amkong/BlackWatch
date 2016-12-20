const Discord = require('discord.js');
const assert = require('assert');

// testing tests
describe('Array', () => {
  describe('#indexOf()', ()=> {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

// test client
describe('Client', () => {
  describe('#client.on', () => {
    it('should create a client', (done) => {
      var client = new Discord.Client();
      client.on('ready', () => {
        if (err) done(err);
        else done();
      })
    })
  })
})

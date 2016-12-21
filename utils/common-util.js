const randomUtils       = require('./random-utils.js');

function _prepare (message) {
  let params = message.split(' ');
  let result;

  switch (params[0]) {
    case 'flip':
      result = randomUtils.coinFlip();
      return ' flipped a coin and... ' + result;
      break;
    case 'invite':
      // player-util?
      break;
    case 'randomhero':
      result = randomUtils.randomHero();
      return 'Random Hero Picked! -- ' + result;
      break;
    default:
      msg.reply('unknown request');
      break;
  }
}

module.exports = {
  _prepare: _prepare
}

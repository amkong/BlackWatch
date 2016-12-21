const randomUtils       = require('./random-utils.js');

function _prepare (message) {
  let params = message.split(' ');

  switch (params[0]) {
    case 'flip':
      let result = randomUtils.coinFlip();
      return ' flipped a coin and... ' + result;
      break;
    case 'invite':
      // player-util?
      break;
    default:
      msg.reply('unknown request');
      break;
  }
}

module.exports = {
  _prepare: _prepare
}

const randomUtils       = require('./random-utils.js');
const discordUtil       = require('./discord-util.js');

function _prepare (message, client, discordMsg) {
  let params = message.split(' ');
  let result;

  switch (params[0]) {
    case 'flip':
      result = randomUtils.coinFlip();
      return discordMsg.reply(` flipped a coin and... ${result}`)
        .then((msg) => { console.log(`sent: ${msg}`) })
        .catch( console.error )
      break;
    case 'invite':
      // TODO: fix this up
      return discordUtil.invitePlayer(params, client, discordMsg);
      break;
    case 'randomhero':
      result = randomUtils.randomHero();
      return discordMsg.reply(`Random Hero Picked! -- ${result}`)
        .then((msg) => { console.log(`sent: ${msg}`) })
        .catch( console.error )
      break;
    case 'test':
      let channel = discordMsg.channel;

      return channel.sendMessage( 'this is a test' )
        .then((msg) => { console.log(`sent: ${msg}`) })
        .catch( console.error )
      break;
    default:
      msg.reply('unknown request');
      break;
  }
}

module.exports = {
  _prepare: _prepare
}

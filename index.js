const Discord           = require('discord.js');
const randomUtils       = require('./utils/random-utils.js');
const commonUtil        = require('./utils/common-util.js');

const client  = new Discord.Client();
const Token   = 'MjUxMjA5NDQxNzA0MjgwMDc3.CzsZjQ.zz8y-OqJtJk6_BeOHSaTyOwuCYE';


client.on('ready', () => {
  console.log('I am ready!');
})

client.on('message', msg => {
  // housekeeping
  let prefix = "!";
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  // check message starts with !
  if (msg.content.startsWith(prefix)) {
      // strip message of !
      let message = msg.content.replace(/!/g, '');
      console.log('message: ', message);

      // preparer
      let result = commonUtil._prepare(message);
      console.log('results: ', result);
      msg.reply(result);
  }

  // coin flip
  function coinFlip () {

  }

  // tests
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.sendMessage('pong!');
  }

  if (msg.content.startsWith(prefix + 'ayyy')) {
    msg.channel.sendMessage('lmao');
  }
});

client.login(Token);

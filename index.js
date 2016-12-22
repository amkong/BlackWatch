const Discord           = require('discord.js');
const commonUtil        = require('./utils/common-util.js');

const client  = new Discord.Client();
const Token   = 'MjUxMjA5NDQxNzA0MjgwMDc3.CzsZjQ.zz8y-OqJtJk6_BeOHSaTyOwuCYE';


client.on('ready', () => {
  console.log('Blackwatch is keeping an eye on you...');
})

client.on('message', msg => {
  // housekeeping
  let prefix = "!";
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  // check message starts with !
  if (msg.content.startsWith(prefix)) {
      // strip message of !
      let message = msg.content.replace(/!/g, '').toLowerCase();

      // preparer
      return commonUtil._prepare(message, client, msg);
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

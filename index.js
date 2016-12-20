const Discord = require('discord.js');
const client = new Discord.Client();
const Token = 'MjUxMjA5NDQxNzA0MjgwMDc3.CzsZjQ.zz8y-OqJtJk6_BeOHSaTyOwuCYE';

client.on('ready', (params) => {
  console.log('I am ready!', params);
})

client.on('message', msg => {
  // housekeeping
  let prefix = "!";
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  // check message starts with !
  if (msg.content.startWith(prefix)) {
      var message = msg.content;
      console.log(message);
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

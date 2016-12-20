const Discord = require('discord.js');
const client = new Discord.Client();
const Token = 'MjUxMjA5NDQxNzA0MjgwMDc3.CzsZjQ.zz8y-OqJtJk6_BeOHSaTyOwuCYE';

client.on('ready', () => {
  console.log('I am ready!');
})

client.on('message', msg => {
  let prefix = "!";
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.sendMessage('pong!');
  }

  if (msg.content.startsWith(prefix + 'ayyy')) {
    msg.channel.sendMessage('lmao');
  }
});

client.login(Token);

// invite player to game?
function invitePlayer(params, client, discordMsg) {
  // TODO: error check for correct params;
  let players   = discordMsg.mentions.users;
  let game      = params[params.length - 1];
  let author    = discordMsg.author;
  let channel   = discordMsg.channel;

  // TODO: limit player invites to 5 players.
  // TODO: pull game from author if there is no game param in input string (have to change how to get game input)
  // TODO: make invites one line only.
  return players.map((player) => {
    channel.sendMessage(`${author} has invited ${player} to play ${game}`)
      .then(message => { console.log(`sent message: ${message.content}`) })
      .catch(console.error);
  })
}

module.exports = {
  invitePlayer: invitePlayer
}

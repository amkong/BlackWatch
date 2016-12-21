function coinFlip () {
  console.log('flipping coin');
  let num = Math.random();
  if (num > 0.49) return 'heads';
  else if (num < 0.51) return 'tails';
  else return "IT LANDED ON IT'S SIDE";
}

function randomHero () {
  let heros = ['Genji', 'Mccree', 'Hanzo', 'Zenyatta', 'Zarya', 'Pharah', 'Reinhardt',
  'Widowmaker', 'Roadhog', 'Soldier 76', 'Mei', 'Tracer', 'Junkrat', 'Lucio', 'Bastion',
  'Mercy', 'Ana', 'D.va', 'Torbjorn', 'Winston', 'Reaper', 'Symmetra', 'Sombra'];

  var rand = heros[Math.floor(Math.random() * heros.length)];
  return rand;
}

module.exports = {
  coinFlip: coinFlip,
  randomHero: randomHero
}

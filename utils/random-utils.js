function coinFlip () {
  console.log('flipping coin');
  let num = Math.random();
  if (num > 0.49) return 'heads';
  else if (num < 0.51) return 'tails';
  else return "IT LANDED ON IT'S SIDE";
}

module.exports = {
  coinFlip: coinFlip
}

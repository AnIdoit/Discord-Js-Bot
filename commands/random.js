exports.run = (client, message, args) => {
  let config = require("../config");
  if(message.content.startsWith(config.bot.prefix + random number)) {
    let arrayNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let Random = arrayNum[Math.floor(Math.random() * arrayNum.length)];

    message.channel.send(Random);
  } else
  if(message.content.startsWith(config.bot.prefix + random letter)) {
    let arrayNum = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let Random = arrayNum[Math.floor(Math.random() * arrayNum.length)];

    message.channel.send(Random);
  } else
  if(message.content.startsWith(config.bot.prefix + random number)) {
    let arrayNum = ['Hello Human', 'Kindly Die', 'you must construct additional pylons!', 'Oh nose, No phrase found'];
    let Random = arrayNum[Math.floor(Math.random() * arrayNum.length)];

    message.channel.send(Random);
  }else {
    message.channel.send(`${message.user.username}, random number, random letter or random phrase...`)
  }
};

exports.run = (client, message, args) => {
  let config = require("../config.json");
  if(!(message.author.id === config.ownerid)) return;
  if(!args || args.size < 1) return message.channel.send(`${message.author.username}, you must provide a command name to reload.`);
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.channel.send(`${message.author.username}, the command ${args[0]} has been reloaded.`);
};

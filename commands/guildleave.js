exports.run = (client, message, args) => {
  let config = require("../config.json");
  if(!(message.author.id === config.ownerid)) return;
  message.guild.leave();
};

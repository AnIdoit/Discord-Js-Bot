exports.run = (client, message, args) => {
  let config = require("../config.json");
  if(!(message.author.id === config.owner.id)) return;
  message.guild.leave();
};

exports.run = (client, message, args) => {
  let config = require("../config.json");
  if(!(message.author.id === config.owner.id)) return;
  let cmessage = args.join(' ');
  message.channel.send(cmessage);
};

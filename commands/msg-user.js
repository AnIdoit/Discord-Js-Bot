exports.run = (client, message, args) => {
  let config = require("../config.json");
  if(!(message.author.id === config.owner.id)) return;

  if(message.content.startsWith(config.prefix + "msg-user")) {
    let cmessage = args.slice(1).join(' ');
    message.mentions.users.first().send(cmessage);
  };
};

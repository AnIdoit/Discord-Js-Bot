exports.run = (undefined, member, args) => {
  let config = require("../config.json");
  let guild = member.guild;
  let channel = guild.channels.find("name", config.join.channel);

  channel.send(`goodbye ${member.user.username}`);
};

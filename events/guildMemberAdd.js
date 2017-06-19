exports.run = (undefined, member, args) => {
  let config = require("../config.json");
  let guild = member.guild;
  
  let role = guild.roles.find("name", config.join.role);
  let channel = guild.channels.find("name", config.join.channel)
  member.addRole(role.id) .then(() => {
    channel.send(`${member.user.username}, welcome to the server!`);
  });
};

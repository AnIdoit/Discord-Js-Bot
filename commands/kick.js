exports.run = (client, message, args) => {
  let mod = message.guild.roles.find("name", "Freeze-Mod");
  let admin = message.guild.roles.find("name", "Freeze-Admin");
  let config = require("../config.json");

  if (!(message.member.roles.has(mod.id) || message.member.roles.has(admin.id) || message.author.id === config.ownerid)) {
    return message.channel.send(`${message.user.username}, You don't have the permission to use this command.`);
  };
  if (message.mentions.users.size === 0) {
    return message.channel.send(`${message.user.username}, please mention a user to kick`);
  };
  let kickMember = message.guild.member(message.mentions.users.first());
  if (!kickMember) {
    return message.channel.send(`${message.user.username}, that user does not seem valid`);
  };
  if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.channel.send(`${message.user.username}, I don't have the permissions (KICK_MEMBER) to do this.`);
  };
  kickMember.kick().then(member => {
    message.channel.send(`${message.user.username}, ${member.user.username} was succesfully kicked.`);
  }).catch(console.error)
};

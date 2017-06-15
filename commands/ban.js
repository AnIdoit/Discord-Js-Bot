exports.run = (client, message, args) => {
  let admin = message.guild.roles.find("name", "Freeze-Admin");
  let config = require("../config.json");

  if (!(message.member.roles.has(admin.id) || message.author.id === config.ownerid)) {
    return message.channel.send(`${message.user.username}, you don't have the permission to use this command.`);
  };
  if (message.mentions.users.size < 1) {
    return message.channel.send(`${message.user.username}, please mention a user to ban.`);
  };
  let kickMember = message.guild.member(message.mentions.users.first());
  if (!kickMember) {
    return message.channel.send(`${message.channel.username}, that user does not seem valid`);
  };
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
    return message.channel.send(`${message.author.username}, I don't have the permissions (BAN_MEMBER) to do this.`);
  };
  kickMember.kick().then(member => {
    message.channel.send(`${message.author.username}, ${member.user.username} was succesfully banned.`);
  }).catch(console.error)
};

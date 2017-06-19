const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let config = require("../config.json");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', config.moderation.logs);
  let adminRole = message.guild.roles.find("name", config.moderation.adminrole);

  if (!(message.member.roles.has(adminRole.id) || message.author.id === config.owner.userid)) {
    message.send(`${message.user.username}, You don't have permission`);
  };
  if (!modlog) return message.send(`${message.user.username}, I cannot find a mod-log channel`);
  if (reason.length < 1) return message.send(`${message.user.username}, You must supply a reason for the ban.`);
  if (message.mentions.users.size < 1) return message.send(`${message.user.username}, You must mention someone to ban them.`);
  if (!message.guild.member(user).bannable) return message.send(`${message.user.username}, I cannot ban that member`);

  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
};

const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let config = require("../config.json");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', config.moderation.log);
  let modRole = message.guild.roles.find("name", config.moderation.modrole);
  let adminRole = message.guild.roles.find("name", config.moderation.adminrole);

  if (!(message.member.roles.has(modRole.id) || message.member.roles.has(adminRole.id) || message.author.id === config.owner.userid)) {
    message.send(`${message.user.username}, You don't have permission`);
  };
  if (!modlog) return message.send(`${message.user.username}, I cannot find a ${config.moderation.log} channel`);
  if (reason.length < 1) return message.send(`${message.user.username}, You must supply a reason for the kick.`);
  if (message.mentions.users.size < 1) return message.send(`${message.user.username}, You must mention someone to kick them.`)
  if (!message.guild.member(user).kickable) return message.send(`${message.user.username}, I cannot kick that member`);

 message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Kick\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
};

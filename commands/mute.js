const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let config = require("../config.js");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', config.moderation.log);
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', config.moderation.muterole);
  let modRole = message.guild.roles.find("name", config.moderation.modrole);
  let adminRole = message.guild.roles.find("name", config.moderation.adminrole);

  if (!(message.member.roles.has(modRole.id) || message.member.roles.has(adminRole.id) || message.author.id === config.owner.userid)) {
    message.send(`${message.user.username}, You don't have permission`);
  };
  if (!modlog) return message.send(`${message.user.username}, I cannot find a ${config.moderation.log} channel`);
  if (!muteRole) return message.send(`${message.user.username}, I cannot find a mute role`);
  if (reason.length < 1) return message.send(`${message.user.username}, You must supply a reason for the mute`);
  if (message.mentions.users.size < 1) return message.send(`${message.user.username}, You must mention someone to mute them`);
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.send(`${message.user.username}, I do not have the correct permissions.`);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Mute/Unmute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed})
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed})
    });
  }
};

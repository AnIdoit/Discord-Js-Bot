const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let config = require("../config.js");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', config.moderation.log);
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', config.moderation.muteRole);
  if (!modlog) return message.reply(`${message.user.username}, I cannot find a ${config.moderation.log} channel`);
  if (!muteRole) return message.send(`${message.user.username}, I cannot find a mute role`);
  if (reason.length < 1) return message.send(`${message.user.username}, You must supply a reason for the mute`)
  if (message.mentions.users.size < 1) return message.send(`${message.user.username}, You must mention someone to mute them`)
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Mute/Unmute\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.send(`${message.user.username}, I do not have the correct permissions.`);
  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

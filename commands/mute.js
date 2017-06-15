var Discord = require("discord.js")
exports.run = (client, message, args) => {
  let config = require("../config.json");
  let mod = message.guild.roles.find("name", "Freeze-Mod");
  let admin = message.guild.roles.find("name", "Freeze-Admin");

  if (!(message.member.roles.has(mod.id) || message.member.roles.has(admin.id) || message.author.id === config.ownerid)) return;
    let user = message.mentions.users.first();
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
    if (!muteRole) return message.reply('I cannot find a mute role');
    if (message.mentions.users.size < 1) return message.channel.send(`${message.author.username}, you must mention someone to mute them.`);
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send(`${message.author.username}, I do not have the correct permissions.`)
    if (message.guild.member(user).roles.has(muteRole.id)) {
      message.guild.member(user).removeRole(muteRole);
      message.channel.send(`Unmuted.`);
    } else {
      message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.send(`Muted.`);
    });
  };
};

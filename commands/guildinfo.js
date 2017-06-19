exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  let config = require("../config.json");

  const embed = new Discord.RichEmbed()
    .setTitle('Guild Info')
    .setColor(0x00AE86)
    .setFooter(`Bot By: ${config.owner.username}`)
    .setThumbnail(message.guild.iconURL)
    .addField('Server Name', message.guild.name)
    .addField('Server Owner', message.guild.owner.user.tag)
    .addField('Created On', message.guild.createdAt)
    .addField('Default Channel', message.guild.defaultChannel)
    .addField('Member Count', message.guild.memberCount)
    .addField("verification level", message.guild.verificationLevel)
    .addField("guild region", message.guild.region);
    message.channel.send('', {embed} );
};

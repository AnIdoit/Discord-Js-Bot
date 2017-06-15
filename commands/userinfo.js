exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  var user = message.mentions.users.first()
  var member = message.guild.member(user);

  const embed = new Discord.RichEmbed()
    .setTitle('User Info')
    .setColor(0x00AE86)
    .setFooter('Bot by: Aubry#4221')
    .setThumbnail(user.avatarURL)
    .addField('Display Name', member.displayName)
    .addField('Tag', user.tag)
    .addField('Bot (T/F)', user.bot)

    message.channel.send('', {embed} );
};

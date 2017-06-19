exports.run = (client, message, args) => {
  const Discord = require('discord.js');

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setFooter(`Bot by: ${config.owner.username}`)
    .setThumbnail(client.user.avatarURL)
    .addField('----Normal User----', 'ping - responds pong\nguildinfo - info on current guild \n')
    .addField('----Mod----', 'kick - kicks mentioned user \n')
    .addField('----Admin----', 'ban - bans mentioned user\n');
  message.author.send('**Commands:**', {embed} ).then(() => {
    message.author.send("Help Server: https://discord.gg/yb6V4SP") .then(() => {
      message.channel.send(`${message.author.username}, DMs`);
    });
  });
};

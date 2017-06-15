exports.run = (client) => {
  console.log(`${client.user.username} ready in ${client.channels.size} channels on ${client.guilds.size} servers.`);
  client.user.setGame(`in ${client.guilds.size} servers`);
  client.user.setAvatar("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcXXSipDFxgpo8-Crb7_TTeDkEQ7WOkyqr5hybn-0F8bhNDIQ")
};

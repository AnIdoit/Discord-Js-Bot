exports.run = (client) => {
  console.log(`${client.user.username} ready in ${client.guilds.size} servers.`);
  client.user.setGame(`in ${client.guilds.size} servers`);
};

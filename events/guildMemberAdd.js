exports.run = (undefined, member, args) => {
  let guild = member.guild;
  let role = guild.roles.find("name", "New Members");
  let channel = guild.channels.find("name", "hello-goodbye")
  member.addRole(role.id) .then(() => {
    channel.send(`${member.user.username}, welcome to the server!`);
  });
};

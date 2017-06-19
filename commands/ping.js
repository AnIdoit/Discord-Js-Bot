exports.run = (client, message, args) => {
  message.channel.send('Pong?') .then(msg => {
      msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

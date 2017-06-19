const Discord = require('discord.js');
const client = new Discord.Client({
});
const fs = require("fs");
const config = require("./config.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.bot.prefix)) return;

  const args = message.content.split(" ");
  const command = args.shift().slice(config.bot.prefix.length);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.bot.token)

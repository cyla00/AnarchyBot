require('dotenv').config();
const Discord = require('discord.js');
const Bot = new Discord.Client();

const Token = process.env.TOKEN;

Bot.on('ready', () => {
  let guilds = Bot.guilds.cache.size;
  console.log(`${Bot.user.username} online...\nPresence in server ${guilds}`);
});

Bot.login(Token);

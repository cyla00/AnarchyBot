require('dotenv').config();
const Discord = require('discord.js');
const Bot = new Discord.Client();

const Token = process.env.TOKEN;

Bot.on('ready', () => {
  console.log(`${Bot.user.username} online...\nPresence in server ${Bot.guilds.cache.size}`);
});

Bot.login(Token);

require('dotenv').config();
const Commando = require('discord.js-commando');
const path = require('path');

const client = new Commando.Client({
  owner: process.env.OWNER_ID,
  commandPrefix: '!'
});

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));
  
client.once('ready', () => {
  console.log('I am working!');
});

client.login(process.env.BOT_TOKEN);
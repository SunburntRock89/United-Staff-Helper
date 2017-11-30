const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('../settings.json');

exports.run = function(client, message, args) {
    randomroast = Math.floor(Math.random() * (settings.roasts.length - 1));
    let member = message.mentions.members.first();

    message.channel.send(`${member} ${settings.roasts[randomroast]}`);
}
const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('../settings.json');

exports.run = function(client, message, args) {
    randommeme = Math.floor(Math.random() * (settings.memes.length - 1));

    const embed = new Discord.RichEmbed()
    embed.setImage(settings.memes[randommeme])
    embed.setColor("#add8e6")
    message.channel.send({embed});

}
const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("About Unites Staff Helper")
    .addField("What is this bot?", "This bot is a Staff Helper for the Staff Members on the United Expeditions.")
    .addField("This doesn't work, that doesn't work! AAAAA", "No worries, just DM Dan.#2518 and he can fix it. :wink:")
    .setColor("#add8e6")
    .setThumbnail("https://cdn.discordapp.com/attachments/384749294042742785/384753378468823050/Unites_Staff_Helper_Avatar.png")
    message.channel.send({embed});
}
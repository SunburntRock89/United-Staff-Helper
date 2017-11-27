const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed1 = new Discord.RichEmbed();
    const embed2 = new Discord.RichEmbed();
    let member = message.mentions.members.first();
    let reason = message.content.split(/\s+/g).slice(2).join(" ");
    if (message.mentions.users.size == 0) {
        return message.channel.send(`**${message.author} You need to mention a user! :angry:**`);
    }
    if (message.mentions.users.size > 1) {
        return message.channel.send(`**${message.author} You can only mention one user! :anguished:**`);
    }
    if (reason.length == 0) {
        return message.channel.send(`**${message.author} You need to include a reason! :face_palm:**`);
    }

    embed1.setTitle(`${member.user.tag} has been warned!`)
    .setDescription(`${member.user.tag} has been warned!\n Reason: ${reason}`)
    .setColor("#98fb98")
    message.channel.send({embed: embed1});

    embed2.setTitle("You've been warned!")
    .setDescription(`It looks like you've been warned by ${message.author} on ${message.guild.name}!\n Reason: ${reason}`)
    .setColor("#ff0000")
    message.mentions.members.first().send({embed: embed2});
}
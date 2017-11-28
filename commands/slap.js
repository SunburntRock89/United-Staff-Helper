exports.run = function(client, message, args) {
    let member = message.mentions.members.first();
    if (message.mentions.users.size = 0) {
        return message.channel.send(`**${message.author} You need to slap someoone! :angry:**`);
    }
    if (message.mentions.users.size > 1) {
        return message.channel.send(`**${message.author} Calm down you can only slap one person at a time! :anguished:**`)
    }
    message.channel.send(`**${member} has been slapped by ${message.author} :boom:**`);
}
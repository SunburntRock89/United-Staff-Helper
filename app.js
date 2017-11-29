const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

Object.assign(String.prototype, {
    escapeRegex() {
        const matchOperators = /[|\\{}()[\]^$+*?.]/g;
        return this.replace(matchOperators, "\\$&");
    },
});

client.on('guildMemberAdd', member => {
    let logs = member.guild.channels.find('name', 'logs');
    let general = member.guild.channels.find('name', 'general');
    general.send(`Welcome ${member}, have a good time!`);
    logs.send(`${member.user.username} has joined.`);
})

client.on('guildMemberRemove', member => {
    let logs = member.guild.channels.find('name', 'logs');
    let general = member.guild.channels.find('name', 'general');
    general.send(`Goodbye ${member}, see you soon!`);
    logs.send(`${member.user.username} has left.`);
})

client.login(settings.token);
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

client.login(settings.token);
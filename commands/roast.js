const Discord = require("discord.js");
const settings = require("../settings.json");

module.exports = async(client, message, args) => {
	let randomroast = Math.floor(Math.random() * (settings.roasts.length - 1));
	let member = message.mentions.members.first();

	message.channel.send(`${member} ${settings.roasts[randomroast]}`);
};

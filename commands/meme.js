const Discord = require("discord.js");
const settings = require("../settings.json");

module.exports = async(client, message, args) => {
	let randommeme = Math.floor(Math.random() * (settings.memes.length - 1));

	const embed = new Discord.RichEmbed();
	embed.setImage(settings.memes[randommeme]);
	embed.setColor("#add8e6");
	message.channel.send({ embed });
};

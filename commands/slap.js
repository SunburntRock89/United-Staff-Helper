const Discord = require("discord.js");

module.exports = async(client, message, args) => {
	let member = message.mentions.members.first();
	const embed = new Discord.RichEmbed();
	if (message.mentions.users.size === 0) {
		return message.channel.send(`**${message.author} You need to slap someoone! :angry:**`);
	}
	if (message.mentions.users.size > 1) {
		return message.channel.send(`**${message.author} Calm down you can only slap one person at a time! :anguished:**`);
	}
	embed.setDescription(`${member} has been slapped by ${message.author}`)
		.setColor("#ffa500")
		.setImage("https://i.imgur.com/ZmCznWq.gif");
	message.channel.send({ embed });
};

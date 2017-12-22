const Discord = require("discord.js");

module.exports = async(client, message, args) => {
	const embed = new Discord.RichEmbed();
	embed.setTitle(`Server Info for ${message.guild.name}`, true)
		.addField("Name", message.guild.name, true)
		.addField("ID", message.guild.id, true)
		.addField("Created At", message.guild.createdAt, true)
		.addField("Location", message.guild.region, true)
		.addField("Owner", message.guild.owner, true)
		.addField("Member Count", message.guild.memberCount, true)
		.addField("Large?", message.guild.large, true)
		.setThumbnail(message.guild.iconURL)
		.setColor("#add8e6");
	message.channel.send(embed);
};

const Discord = require("discord.js");

module.exports = async(client, message, args) => {
	const embed1 = new Discord.RichEmbed();
	const embed2 = new Discord.RichEmbed();
	let role = message.content.split(/\s+/g).slice(1).join(" ");
	let findrole = message.guild.roles.find("id", role);
	let logs = message.guild.channels.find("name", "logs");
	if (role.length == 0) {
		return message.channel.send(`**${message.author} You need to include a valid role name. :face_palm:**`);
	}
	if (!findrole) {
		return message.channel.send(`**${message.author} That is not a valid role. :angry:**`);
	}
	message.guild.member(message.author).removeRole(role).catch(error => console.log(error));

	embed1.setDescription(`${message.author} has been removed from the ${role} role.`)
		.setColor("#add8e6");
	message.channel.send(embed1);

	embed2.setDescription(`${message.author} has been removed from the ${role} role.`)
		.setColor("#add8e6");
	logs.send(embed2);
};

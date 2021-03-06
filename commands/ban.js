const Discord = require("discord.js");

module.exports = async(client, message, args) => {
	const embed1 = new Discord.RichEmbed();
	const embed2 = new Discord.RichEmbed();
	let member = message.mentions.members.first();
	let reason = message.content.split(/\s+/g).slice(2).join(" ");
	if (!message.member.roles.has("376843322938884106")) {
		return message.channel.send(`**${message.author} You don't have enough permissions to run this command! :raised_hand:**`);
	}
	if (message.mentions.users.size == 0) {
		return message.channel.send(`**${message.author} You need to mention a user! :angry:**`);
	}
	if (message.mentions.users.size > 1) {
		return message.channel.send(`**${message.author} You can only mention one user! :anguished:**`);
	}
	if (reason.length == 0) {
		return message.channel.send(`**${message.author} You need to include a reason! :face_palm:**`);
	}

	embed1.setTitle(`${member.user.tag} has been banned!`)
		.setDescription(`${member.user.tag} has been banned! :hammer:`)
		.setColor("#98fb98");
	message.channel.send({ embed: embed1 });

	embed2.setTitle("You've been banned!")
		.setDescription(`It looks like you've been banned by ${message.author} on ${message.guild.name}! :hammer:`)
		.setColor("#ff0000");
	message.mentions.members.first().send({ embed: embed2 });

	member.ban(reason);
};

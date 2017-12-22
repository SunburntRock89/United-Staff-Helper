const Discord = require("discord.js");

module.exports = async(client, message, args) => {
	const embed1 = new Discord.RichEmbed();
	const embed2 = new Discord.RichEmbed();
	const embed3 = new Discord.RichEmbed();
	embed1.setTitle("United Staff Helper Help Menu Page 1")
		.setDescription("These are all the commands in the United Staff Helper Discord Bot, enjoy! :wink:\n The prefix for United Staff Helper is `?`")
		.addField("about", "Posts an embed with a little bit of info about the bot. `?about`")
		.addField("ban", "Allows you to ban a specified user, with a reason. `?ban [user] [reason]`")
		.addField("help", "DMs you this help menu. `?help`")
		.addField("kick", "Allows you to kick a specified user, with a reason. `?kick [user] [reason]`")
		.addField("ping", "Pings the connection of the bot with a milliseconds value. `?ping`")
		.addField("warn", "Allows you to warn a user, with a reason. `?warn [user] [reason]`")
		.addField("eval", "Allows you to evaluate Javascript code.`?eval [code]` **MAINTAINER ONLY**")
		.addField("cookie", ":cookie: !!! `?cookie`")
		.addField("slap", "Allows you to slap a specified user. `?slap [user]`")
		.addField("meme", "Posts an embed with a random meme. `?meme`")
		.addField("roast", "Allows you to roast someone. `?roast [user]`")
		.addField("serverinfo", "Posts an embed with some basic Server Info. `?serverinfo`")
		.addField("8ball", "Answers your question with a random Yes or No answer. `?8ball [question]`")
		.addField("suggestion", "DMs you the link for the suggestion box for the United Staff Helper. `?suggestion`")
		.setColor("#add8e6")
		.setThumbnail("https://cdn.discordapp.com/attachments/384749294042742785/384753378468823050/Unites_Staff_Helper_Avatar.png")
		.setFooter("Be sure to DM Dan.#2518 or any other developer of United Staff Helper if you bump into any problems or glitches with the bot.");
	message.author.send({ embed: embed1 });

	embed2.setTitle("United Staff Helper Help Menu Page 2")
		.addField("get", "Allows you to get a role. `?get [role id]`")
		.addField("remove", "Allows you to get removed from a role. `?remove [role id]`")
		.setColor("#add8e6")
		.setThumbnail("https://cdn.discordapp.com/attachments/384749294042742785/384753378468823050/Unites_Staff_Helper_Avatar.png")
		.setFooter("Be sure to DM Dan.#2518 or any other developer of United Staff Helper if you bump into any problems or glitches with the bot.");
	message.author.send({ embed: embed2 });

	embed3.setTitle("Help!!")
		.setDescription("Check your DMs. :mailbox:")
		.setColor("add8e6");
	message.channel.send({ embed: embed3 });
};

const settings = require("../settings.json");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	if (settings.maintainers.includes(message.author.id)) {
		if (args) {
			args = args.join(" ")
			try {
				if (args.startsWith("```js") && args.endsWith("```")) args = args.substring(5, args.length - 3);
				const asyncify = code => `(async () => {\nreturn ${code.trim()}\n})()`;
				let result = await eval(asyncify(args));
				if (typeof result !== "string") result = require("util").inspect(result, false, 1);
				let array = [
					client.token.escapeRegex(),
					settings.token.escapeRegex(),
				];
				let regex = new RegExp(array.join("|"), "g");
                result = result.replace(regex, "Error: client.token not allowed.");
                const embed = new Discord.Client();
				message.channel.send({
					embed: {
						color: 0x00FF00,
						description: `\`\`\`js\n${result}\`\`\``,
					},
				});
			} catch (err) {
				message.channel.send({
					embed: {
						color: 0xFF0000,
						description: `\`\`\`js\n${err.stack}\`\`\``,
					},
				});
			}
		}
	} else {
		message.channel.send({
			embed: {
				color: 0xff0000,
				title: `:no_entry: No permissions`,
				description: `Maintainers only. (AKA Dan and Dking1009)`,
				footer: {
					text: settings.version,
				},
			},
		});
	}
};
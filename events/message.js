const settings = require("../settings.json");
module.exports = message => {
	if (!message.content.startsWith(settings.prefix)) return;
	const client = message.client;
	const args = message.content.split(" ");
	const cmd = message.content.split(" ")[0].trim().toLowerCase().replace(settings.prefix, "");
	let cmdFile;
	try {
		cmdFile = require(`./commands/${cmd}.js`);
	} catch (err) {
		return;
	}
	if (cmdFile) {
		return cmdFile(client, message, args);
	}
};

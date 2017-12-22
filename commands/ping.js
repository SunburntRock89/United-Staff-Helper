module.exports = async(client, message, args) => {
	message.channel.send(`**Pong!** Our connection is ${Math.floor(client.ping)}ms!`);
};

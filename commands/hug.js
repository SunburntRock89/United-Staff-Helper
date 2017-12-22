module.exports = async(client, message, args) => {
	let user = message.mentions.users.first();
	const hugReplies = [
		`*hugs ${user}*`,
		`*hugs ${user}*`,
		`*hugs ${user}*`,
		`*hugs ${user}*`,
		`*licks ${user}*`,
		`*pounces ${user}*`,
		`*jumps on ${user}*`,
		`*glomps ${user}*`,
		`*falls on ${user}*`,
		`*bear hugs ${user}*`,
		`*tightly squeezes ${user}*`,
		`*embraces ${user}*`,
		`*holds ${user} close*`,
		`*cuddles ${user}*`,
		`*takes ${user} into his arms*`,
	];

	let randomReply = Math.floor(Math.random() * hugReplies.length);

	message.channel.send(hugReplies[randomReply]);
};

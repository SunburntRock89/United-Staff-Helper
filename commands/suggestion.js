module.exports = async(client, message, args) => {
	message.channel.send(`**${message.author} Check your DMs. :mailbox_with_no_mail:**`);
	message.author.send("**Feel free to suggestion stuff for the bot using this form:** https://goo.gl/qccASD");
};

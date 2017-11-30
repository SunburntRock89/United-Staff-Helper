exports.run = function(client, message, args) {
    function getRandom(min, max) {
        ran = Math.floor(Math.random() * (max - min + 1)) + min;
        return ran;
      }
    let question = getRandom(0, 1, 2);
    if (question == "0") {
        message.channel.send(`${message.author} Yes. :smiley:`)
    }
    if (question == "1") {
        message.channel.send(`${message.author} No. :frowning:`)
    }
    if (question == "2") {
        message.channel.send(`${message.author} Maybe. :smirk:`)
    }
}
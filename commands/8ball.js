// Gives a random 8ball response

const responses = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good!',
    'Yes~!',
    'Signs point to yes.',
    'Reply hazy try again...',
    'Ask again later.',
    'Better not tell you now...',
    'Cannot predict now...',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply, is no.',
    'My sources, say no.',
    'Outlook not so good...',
    'Very doubtful.'
  ]
  
  exports.run = (client, message) => {
    message.reply(responses[Math.floor(Math.random() * responses.length)])
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: '8ball',
    description: 'Random 8ball response to questions',
    usage: '8ball'
  }

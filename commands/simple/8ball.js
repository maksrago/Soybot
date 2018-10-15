const commando = require('discord.js-commando');
class eightBall extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: '8ball',
		aliases: ['8ball', '8'],
		group: 'simple',
		memberName: '8ball',
		description: 'Ask the 8ball a magic question.'
		});
	}

	async run(message)
	{
		//Manual workaround, removes the prefix of the invoked command, corrected to read all aliases.
		var prefixRemoval = message.content.indexOf(" ");
		const args = message.content.slice(prefixRemoval).trim().split(/ +/g); //needs to find prefix length along with alias length and post
        let otherUser = args[0];
        
		//Links to the various responses
		var responses = ["It is certain", "It is decidedly so", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

		//Converts the invoked users tag from a numerical value to a string, then removes the numbers after the #
		var userTrimmed = message.member.user.tag;
		userTrimmed = userTrimmed.substring(0, userTrimmed.indexOf('#'));
		
        message.channel.send(":8ball: | " + responses[Math.floor(Math.random() * (responses.length))] + ", **" + userTrimmed + "**.");
    }
}
module.exports = eightBall;
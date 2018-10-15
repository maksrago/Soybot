const commando = require('discord.js-commando');
class brapUser extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'brap',
		aliases: ['brap', 'fart'],
		group: 'affection',
		memberName: 'brap',
		description: 'Brush up and fart on someone.'
		});
	}

	async run(message)
	{
		//Manual workaround, removes the prefix of the invoked command, corrected to read all aliases.
		var prefixRemoval = message.content.indexOf(" ");
		const args = message.content.slice(prefixRemoval).trim().split(/ +/g); //needs to find prefix length along with alias length and post
		let otherUser = args[0];
		let overFlow = args[1];
;
		//Links to the various responses
		var responses = [{file: "https://media.giphy.com/media/yoJC2L2NUKYkjqCleU/giphy.gif"}, {file: "https://media.giphy.com/media/TYNhqiBl8U12w/giphy-downsized.gif"}, {file: "https://media.giphy.com/media/x1RJu2pP2hk9a/giphy.gif"}, {file: "https://media.giphy.com/media/KV8qI5dquLs2I/giphy-downsized.gif"}, {file: "https://media.giphy.com/media/8XjrxDGGHvc1q/giphy-downsized.gif"}, {file: "https://media.giphy.com/media/tzKiAnf0jzUUU/giphy.gif"}, {file: "https://media.giphy.com/media/LdF19xcqxH1Be/giphy-downsized.gif"}];
		var soloResponses = [{file: "https://media.giphy.com/media/ekM0e09hvqX3q/giphy-downsized.gif"}, {file: "https://media.giphy.com/media/YZYDVYRxAwCFq/giphy.gif"}, {file: "https://media.giphy.com/media/l2SqhkNjQRis8hxBe/giphy-downsized.gif"}];
		
		//Defining symbol that must be present for the command to run.
		var testIf = '@'; 
		var testValue = otherUser.match(testIf);

		if ((testValue == testIf) && (args.length == 1)) {
			//Converts the invoked users tag from a numerical value to a string, then removes the numbers after the #
			var userTrimmed = message.member.user.tag;
			userTrimmed = userTrimmed.substring(0, userTrimmed.indexOf('#'));
		
			//Converts the first mentioned tag from a numerical value to a string, then removes the numbers after the #
			var convertTag = message.mentions.users.first();
			var atTrimmed = convertTag.tag;
			atTrimmed = atTrimmed.substring(0, atTrimmed.indexOf('#'));

				if(otherUser != message.member) {
					message.channel.send(":cloud: **" + atTrimmed + "** you have been brapped on by **" + userTrimmed + "**.", responses[Math.floor(Math.random() * (responses.length))]);
				}

				else if(otherUser = message.member) {
					message.channel.send("***braps on you***.", soloResponses[Math.floor(Math.random() * (soloResponses.length))]);
				}

				else {
					message.channel.send(":x: You must mention a user!");
				}
		}

		else if(args.length > 1) {
			message.channel.send(":x: You gave me too many parameters!");		
		}

		else {
			message.channel.send(":x: You must mention a user!");
		}	
	}
}

module.exports = brapUser;
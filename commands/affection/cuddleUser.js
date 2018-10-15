const commando = require('discord.js-commando');
class cuddleUser extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'cuddle',
		aliases: ['cuddle', 'snuggle'],
		group: 'affection',
		memberName: 'cuddle',
		description: 'Cuddle and snuggle with a user of your choosing.'
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
		var responses = [{file: "https://i.imgur.com/mU04QD9.gif"}, {file: "https://i.imgur.com/LHt5sxe.gif"}, {file: "https://i.imgur.com/oi3F565.gif"}, {file: "https://i.imgur.com/msGkyUE.gif"}, {file: "https://i.imgur.com/3LQu8KK.gif"}, {file: "https://i.imgur.com/DIJje90.gif"}];
		var soloResponses = [{file: "https://i.imgur.com/5UIbVUn.gif"}, {file: "https://i.imgur.com/FPq92mm.gif"}];
		
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
					message.channel.send(":heart: **" + atTrimmed + "** you have been cuddled by **" + userTrimmed + "**.", responses[Math.floor(Math.random() * (responses.length))]);
				}

				else if(otherUser = message.member) {
					message.channel.send("***cuddles you***.", soloResponses[Math.floor(Math.random() * (soloResponses.length))]);
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

module.exports = cuddleUser;
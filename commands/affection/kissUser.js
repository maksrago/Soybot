const commando = require('discord.js-commando');

class kissUser extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'kiss',
		aliases: ['kiss', 'smooch'],
		group: 'affection',
		memberName: 'kiss',
		description: 'Show someone special how much you care about them.'
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
		var responses = [{file: "https://i.imgur.com/CUyEMek.gif"}, {file: "https://i.imgur.com/dCy75R3.gif"}, {file: "https://i.imgur.com/OGhJGCF.gif"}, {file: "https://i.imgur.com/wEoyXM9.gif"}, {file: "https://i.imgur.com/Cqjz4zQ.gif"}, {file: "https://i.imgur.com/Shhk8Xq.gif"}, {file: "https://i.imgur.com/NalhAjB.gif"}, {file: "https://i.imgur.com/QbM6Vpj.gif"}];
		var soloResponses = [{file: "https://i.imgur.com/ZIRhBFI.gif"}, {file: "https://i.imgur.com/LaBgNIN.gif"}, {file: "https://i.imgur.com/DlknpK0.gif"}];
		
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
					message.channel.send(":kiss: **" + atTrimmed + "** you have been kissed by **" + userTrimmed + "**.", responses[Math.floor(Math.random() * (responses.length))]);
				}

				else if(otherUser = message.member) {
					message.channel.send("***kisses you***.", soloResponses[Math.floor(Math.random() * (soloResponses.length))]);
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

module.exports = kissUser;
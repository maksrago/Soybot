const commando = require('discord.js-commando');

class fingerUser extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'finger',
		aliases: ['finger', 'flipoff'],
		group: 'affection',
		memberName: 'finger',
		description: 'Flip off someone.'
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
		var responses = [{file: "https://i.imgur.com/MGNTDa5.gif"}, {file: "https://i.imgur.com/J2HA4Ms.gif"}, {file: "https://i.imgur.com/WW4LSCM.gif"}, {file: "https://i.imgur.com/1ostz1o.gif"}, {file: "https://i.imgur.com/j7wx1dH.gif"} , {file: "https://i.imgur.com/vIV9J8n.gif"}];
		var soloResponses = [{file: "https://i.imgur.com/DbMrLfS.gif"}, {file: "https://i.imgur.com/ULnJnjh.gif"}, {file: "https://i.imgur.com/TF4a658.gif"}];
		
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
					message.channel.send(":middle_finger: **" + atTrimmed + "** you have been fingered by **" + userTrimmed + "**.", responses[Math.floor(Math.random() * (responses.length))]);
				}

				else if(otherUser = message.member) {
					message.channel.send("***fingers you OwO***.", soloResponses[Math.floor(Math.random() * (soloResponses.length))]);
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

module.exports = fingerUser;


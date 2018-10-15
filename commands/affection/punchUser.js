const commando = require('discord.js-commando');

class punchUser extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'punch',
		aliases: ['punch', 'hit'],
		group: 'affection',
		memberName: 'punch',
		description: 'Violently attack another user.'
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
		var responses = [{file: "https://i.imgur.com/IDPvBvS.gif"}, {file: "https://i.imgur.com/YTUJyNd.gif"}, {file: "https://i.imgur.com/LcK9HTS.gif"}, {file: "https://i.imgur.com/Ro1ilHF.gif"}, {file: "https://i.imgur.com/RqFzPWV.gif"}, {file: "https://i.imgur.com/W0thBSL.gif"}, {file: "https://i.imgur.com/FyXgu94.gif"}, {file: ""}];
		var soloResponses = [{file: "https://i.imgur.com/c1haq5I.gif"}, {file: "https://i.imgur.com/iADToqH.gif"}];
		
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
					message.channel.send(":boxing_glove: **" + atTrimmed + "** you have been punched by **" + userTrimmed + "**.", responses[Math.floor(Math.random() * (responses.length))]);
				}

				else if(otherUser = message.member) {
					message.channel.send("***punches you***.", soloResponses[Math.floor(Math.random() * (soloResponses.length))]);
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

module.exports = punchUser;


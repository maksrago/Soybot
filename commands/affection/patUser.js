const commando = require('discord.js-commando');

class patUser extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'pat',
		aliases: ['pat', 'pet'],
		group: 'affection',
		memberName: 'pat',
		description: 'Pat someone on the head.'
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
		var responses = [{file: "https://i.imgur.com/FIX3wqG.gif"}, {file: "https://i.imgur.com/wA6c6z1.gif"}, {file: "https://i.imgur.com/x3Y0Hbh.gif"}, {file: "https://i.imgur.com/7IHhCjW.gif"}, {file: "https://i.imgur.com/nmZu7ju.gif"}, {file: "https://i.imgur.com/RPKWE9R.gif"}, {file: "https://i.imgur.com/IkGUVH4.gif"}, {file: "https://i.imgur.com/1uMScKf.gif"}, {file: "https://i.imgur.com/Vsa6ojI.gif"}, {file: "https://i.imgur.com/wMKrGhU.gif"}];
		var soloResponses = [{file: "https://i.imgur.com/TiqcnD4.gif"}, {file: "https://i.imgur.com/GLOzJQb.gif"}, {file: "https://i.imgur.com/zLT6X7X.gif"}];
		
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
					message.channel.send(":speech_balloon: **" + atTrimmed + "** you have been patted by **" + userTrimmed + "**.", responses[Math.floor(Math.random() * (responses.length))]);
				}

				else if(otherUser = message.member) {
					message.channel.send("***pats you***.", soloResponses[Math.floor(Math.random() * (soloResponses.length))]);
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

module.exports = patUser;


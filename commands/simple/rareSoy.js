const commando = require('discord.js-commando');

class rareSoy extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'raresoy',
		aliases: ['raresoy', 'rs'],
		group: 'simple',
		memberName: 'raresoy',
		description: 'Post a random rare picture of Anthony Soytano.'
		});
	}

	async run(message, args)
	{
		var responses = [{file: "https://i.imgur.com/APWwSzf.png"}, {file: "https://i.imgur.com/y9GqoS7.jpg"}, {file: "https://i.imgur.com/PigOuMs.gif"}, {file: "https://i.imgur.com/Vgv6Lej.png"}];
		message.channel.send(responses[Math.floor(Math.random() * (responses.length))]);
	}
}

module.exports = rareSoy;
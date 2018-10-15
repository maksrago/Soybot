const commando = require('discord.js-commando');

class movieNight extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'movienight',
		aliases: ['mv', 'mn', 'rabbit'],
		group: 'simple',
		memberName: 'movienight',
		description: 'Command used to display the movie night rabbit link.'
		});
	}

	async run(message)
	{
		message.channel.send("**Join us on rabb.it:** https://www.rabb.it/SOYWAVE");
	}
}

module.exports = movieNight;
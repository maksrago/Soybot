//this currently acts as a placeholder

//- Challonge bracket update feature
//- Challonge auto participant sign update
//- Tournament Tracker (with metadata)
const commando = require('discord.js-commando');

class challongeBracket extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'challonge',
		aliases: ['bracket', 'b', 'tournament'],
		group: 'simple',
		memberName: 'challonge',
		description: 'Command for displaying movie night room link.'
		});
	}

	async run(message, args)
	{
		message.channel.send("The current tournament bracket can be viewed at: https://challonge.com/bz1iznv5");
	}
}

module.exports = challongeBracket;
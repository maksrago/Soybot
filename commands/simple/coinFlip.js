const commando = require('discord.js-commando');

class coinFlip extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'coinflip',
		aliases: ['flip', 'coin', 'cointoss'],
		group: 'simple',
		memberName: 'coinflip',
		description: 'Flip a coin!'
		});
	}

	async run(message)
	{
		var chance = Math.floor(Math.random() * 2);
		if (chance == 0) {
			message.channel.send(":black_circle: **HEADS!**");
		}
		else
		{
			message.channel.send(":white_circle: **TAILS!**");
		}
	}
}

module.exports = coinFlip;
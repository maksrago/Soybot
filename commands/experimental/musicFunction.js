//- Tournament Tracker (with metadata)
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class musicFeatures extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'playmusic',
		aliases: ['play', 'p', 'stop', 's', 'q', 'queue', 'move', 'm', 'clear', 'dc', 'disconnect', 'pause'],
		group: 'experimental',
		memberName: 'playmusic',
		description: 'Features for playing music in Soybot.'
		});
	}


	async run(message, ytLink)
	{
		const args = message.content.split(' '); //Removes all data after the space, this will work to seperate out aspects of this bot.
		let prefixDetected = args[0].split("!").pop();

		switch(prefixDetected) {
			case ('play'):
				//	
				if (message.member.voice.channel) {
					const connection = await message.member.voice.channel.join();
				} else {
				message.reply('You must join a voice channel first!')	
				}			
				//
				break;
			case ('stop' || 's'):
				//
				break;
			case ('pause'):
				//
				break;
			case ('queue' || 'q'):
				//
				break;
			case ('move' || 'm'):
				//
				break;
			case ('clear'):
				//
				break;
			case ('disconnect' || 'dc'):
				voiceChannel.leave();
				//
				break;
		}

		console.log(prefixDetected);

	}
}

module.exports = musicFeatures;
const commando = require('discord.js-commando');
class convertTimeTest extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'ct',
		aliases: ['convert'],
		group: 'experimental',
		memberName: 'converttime',
		description: 'Convert to timezones (Takes EST)'
		});
    }

	async run(message)
	{
        const timeInput = args.slice(0,1);
        message.channel.send("timeInput:" + timeInput);
        const imdbLink = args.slice(1,2);
        message.channel.send("imdbLink:" + imdbLink);

        var imdbLinkCheck = false;

        if(imdbLink.match("imdb") = true) {
            imdbLinkCheck = false;
            message.channel.send("That was an acceptable link.");
        }

        if (timeInput < 0 || timeInput > 24.59)
        {
            message.channel.send("Incorrect time format [Must be between 0-24.59]"); 
        }

        else if (imdbLinkCheck = false)
        {
            message.channel.send("You must post an link to the movie on IMDB.");
        }
		message.channel.send("You passed me: " + timeInput + " and " + imdbLink);
	}
}

module.exports = convertTimeTest;
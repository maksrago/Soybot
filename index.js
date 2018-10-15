const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const request = require('request');
const cheerio = require('cheerio');
const bot = new Commando.Client({commandPrefix: 's!'});
const TOKEN = 'NDc5NDExMzQ2MDk4NjE4Mzgx.DlY-ig.DILfAPmMakKQOn8qV53IokzdDKI';

bot.registry.registerGroups([['simple', 'Basic Commands'], ['affection', 'Affection Commands'], ['experimental', 'Experimental Commands (May break!)'], ['admin', 'Commands for Admins']]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on("message", function(message) {
	if(message.content == 'Soytano')
	{
		message.reply('Part of the crew, part of the ship');
	}
});

//BUG TO FIX: If a word has part of the nameList in i
bot.on('message', function(message) {
	if (message.author.bot) return;
	var acceptedWord = message.content;
	var nameList = [/meg/, /megs/, /meaghyn/, /japanesecowgirl/, /jpc/, /jp/, /japanese cowgirl/, /meag/]; 
	var convertedSentence = acceptedWord.toLowerCase();
	
	var i;
	for(i = 0; i < nameList.length; i++) {

		if(convertedSentence.match(nameList[i]) != null) {
			var responses = ["Megs is the best girl on the server.", "Megs is the cutest girl on the server.", "Megs is the cutest girl on the server."];
			message.channel.send(responses[Math.floor(Math.random() * (responses.length))]);
			break;
		}
	}
});

bot.on('message', function(message) {
	if(message.content == '!meme')
	{
	message.channel.send(`${message.author} just got memed on.`, );
	}
});

bot.on('ready', function(){
	console.log("Soybot is online.");
})

bot.login(TOKEN);
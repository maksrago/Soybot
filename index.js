const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const request = require('request');
const cheerio = require('cheerio');
const ytdl = require('ytdl-core');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));
const yt_api_key = config.yt_api_key;
const discord_token = config.discord_token;
const bot_controller = config.bot_controller;
const prefix = config.prefix;


const client = new Commando.Client({ commandPrefix: 's!' });
client.login(discord_token);
client.on('ready', function () {
	console.log("Soybot is online.");
})

client.registry.registerGroups([['simple', 'Basic Commands'], ['affection', 'Affection Commands'], ['experimental', 'Experimental Commands (May break!)'], ['admin', 'Commands for Admins']]);
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');

//-------

var queue = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];

client.on('message', function (message) {
	const member = message.member;
	const userInput = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(" ");

	if (userInput.startsWith("@play")) {
		if (queue.length > 0 || isPlaying) {
			getID(args, function (id) {
				add_to_queue(id);
				fetchVideoInfo(id, function (err, videoInfo) {
					if (err) throw new Error(err);
					message.reply(" added to queue **" + videoInfo.title + "**");
				});
			});
		} else {
			isPlaying = true;
			getID(args, function (id) {
				message.channel.send(":play_pause: **Searching** :mag_right: `" + args + "`");
				queue.push("Placeholder");
				playMusic(id, message);
				fetchVideoInfo(id, function (err, videoInfo) {
					if (err) throw new Error(err);
					message.channel.send("**Playing :notes:** `" + videoInfo.title + "` - Now!");
				});

			});
		}
	}

	if (userInput.startsWith("@dc")) {
		isPlaying = false;
		queue.length = 0;
		message.member.voiceChannel.leave();
		message.channel.send(":mailbox_with_no_mail: **Successfully disconnected.**")
	}

	//add check to see if music bot is in channel before posting queue
	if (userInput.startsWith("@q")) {
		if (isPlaying = false) {
			message.channel.send("Soybot is **not** currently connected to a voice channel!");
		} else {
			message.channel.send("`Queue for Soywave\n\n *Now Playing:* [" + "test" + "](" + "https://www.youtube.com/watch?v=" + id + ")`");
		}
	}

});

function playMusic(id, message) {
	voiceChannel = message.member.voiceChannel;

	voiceChannel.join().then(function (connection) {
		stream = ytdl("https://www.youtube.com/watch?v=" + id, {
			filter: 'audioonly'
		});
		skipReq = 0;
		skippers = [];

		dispatcher = connection.playStream(stream);
	});
}

function isYoutube(str) {
	return str.toLowerCase().indexOf("youtube.com") > -1;
}

function getID(str, cb) {
	if (isYoutube(str)) {
		cb(getYoutubeID(str));
	} else {
		search_video(str, function (id) {
			cb(id);
		});
	}
}

function add_to_queue(strID) {
	if (isYoutube(strID)) {
		queue.push(getYoutubeID(strID));
	} else {
		queue.push(strID);
	}
}

function search_video(query, callback) {
	request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function (error, response, body) {
		var json = JSON.parse(body);
		callback(json.items[0].id.videoId);
	});
}

//


client.on("message", function (message) {
	if (message.content == 'Soytano') {
		message.reply('Part of the crew, part of the ship');
	}
});

//BUG TO FIX: If a word has part of the nameList in i
client.on('message', function (message) {
	if (message.author.client) return;
	var acceptedWord = message.content;
	var nameList = [/meg/, /megs/, /meaghyn/, /japanesecowgirl/, /jpc/, /jp/, /japanese cowgirl/, /meag/];
	var convertedSentence = acceptedWord.toLowerCase();

	var i;
	for (i = 0; i < nameList.length; i++) {

		if (convertedSentence.match(nameList[i]) != null) {
			var responses = ["Megs is the best girl on the server.", "Megs is the cutest girl on the server.", "Megs is the cutest girl on the server."];
			//message.channel.send(responses[Math.floor(Math.random() * (responses.length))]);
			break;
		}
	}
});
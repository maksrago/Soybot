const commando = require('discord.js-commando');
const request = require('request');
const cheerio = require('cheerio');

class movieEvent extends commando.Command
{
	constructor(client)
	{
		super(client, {
		name: 'movieevent',
		aliases: ['movieevent', 'me', 'newme', 'posteventmovie'],
		group: 'admin',
		memberName: 'movieevent',
        description: 'Allows admins to post a movie for movie night and it automatically formats. Takes (hhmm MMDDYYYY imdbLink).',
		});
	}
    
	async run(message)
	{
        var prefixRemoval = message.content.indexOf(" ");
        const args = message.content.slice(prefixRemoval).trim().split(/ +/g);
        let inputEventTime = args[0];
        let inputEventDate = args[1];
        let inputImdbLink = args[2];

        var returnedEventTime = checkEventTime(inputEventTime);
        var convertedEventTimeVar = convertEventTime(inputEventTime);

        var returnedEventDate = checkEventDate(inputEventDate);
        var eventDateFormatted = printEventDate(inputEventDate);

        var returnedImdbLink = checkImdbLink(inputImdbLink);

        returnedImdbLink = true;

        if ((returnedEventTime = true) && (returnedEventDate = true) && (returnedImdbLink = true)) {

            request(inputImdbLink, (error, response, html) => { //Testing to see if the link can be connected to
                if(!error && response.statusCode == 200) {
                    const $ = cheerio.load(html);
        
                    const title = $('h1');
                    const runTime = $('.subtext > time');

                    var convertedDay = getEventDateDay(inputEventDate);
                    var convertedGMT = convertGMT(inputEventTime);
                    var convertedCST = convertCST(inputEventTime);
                    var convertedPST = convertPST(inputEventTime);
        
                    if ((returnedEventTime != false) && (returnedImdbLink != false)) {
                        getEventDateDay(inputEventDate);
                        console.log("You have given me a valid input.");
                        message.delete(message);
                        
                        message.channel.send("@everyone\n" + "**ＳＯＹＷＡＶＥ MOVIE NIGHT @ " + convertedEventTimeVar + " EST on " + convertedDay + " (" + eventDateFormatted + ")**\n" + "[ " + convertedGMT + " GMT | " + convertedCST + " CST | " + convertedPST + " PST ]" + "\n" + "\n" + "We will be watching -- **" + title.text().replace(/\s\s+/g, '') + "** [" + runTime.text().replace(/\s\s+/g, '') + "]\n" + "\n" + "React with an Upvote emote if you plan on attending.");
                        //The above message should be posted in #events
                    } 
                }
                    else {
                        console.log("Link was valid, however a connection could not be established with the domain, please try again later or contact an administrator.");
                        returnedImdbLink = false;
                    }
            });
        }

        function checkEventTime(inputEventTime) {
            if (inputEventTime >= 0 && inputEventTime <= 2459 && inputEventTime.length == 4)
            {
                return true;
            }
            else {
                console.log("Time input was not valid, please input a valid time. 24 hour time must be used.");  
                return false;
            }
        }

        function convertEventTime(inputEventTime) {
            var hour = inputEventTime.substring(0, 2);
            var min = inputEventTime.substring(2, 4);
            var returnTime = (hour + ":" + min);

            return returnTime; 
        }

        function convertGMT(returnedEventTime) {
            var hour = returnedEventTime.substring(0, 2);
            var min = returnedEventTime.substring(2, 4);

            var overflow = (+hour) + 5;

            if (overflow > 24) {
                var newHour = overflow - 24;
                hour = newHour;
            }

            else if (overflow < 0) {
                var newHour = 24 + overflow;
                hour = newHour;
            }

            else {
                var newHour = overflow;
                hour = newHour;
            }

            var convertedTime = (newHour + ":" + min);
            return convertedTime;
        }

        function convertCST(returnedEventTime) {
            var hour = returnedEventTime.substring(0, 2);
            var min = returnedEventTime.substring(2, 4);

            var overflow = (+hour) - 1;

            if (overflow > 24) {
                var newHour = overflow - 24;
                hour = newHour;
            }

            else if (overflow < 0) {
                var newHour = 24 + overflow;
                hour = newHour;
            }

            else {
                var newHour = overflow;
                hour = newHour;
            }

            var convertedTime = (newHour + ":" + min);
            return convertedTime;
        }

        function convertPST(returnedEventTime) {
            var hour = returnedEventTime.substring(0, 2);
            var min = returnedEventTime.substring(2, 4);

            var overflow = (+hour) - 3;

            if (overflow > 24) {
                var newHour = overflow - 24;
                hour = newHour;
            }

            else if (overflow < 0) {
                var newHour = 24 + overflow;
                hour = newHour;
            }

            else {
                var newHour = overflow;
                hour = newHour;
            }

            var convertedTime = (newHour + ":" + min);
            return convertedTime;
        }
        
        function checkEventDate(inputEventDate) {
            var day = inputEventDate.substring(0, 2);
            var month = inputEventDate.substring(2, 4);
            var year = inputEventDate.substring(4, 8);

            if (day > 12 || month > 31 || year < 0 || year > 3000 || inputEventDate.length < 8) {
                console.log("Not a valid date, try again.");
                return false;
            }
            else {
                return true;
            }
        }

        function printEventDate(inputEventDate) {
            var day = inputEventDate.substring(0, 2);
            var month = inputEventDate.substring(2, 4);
            var year = inputEventDate.substring(6, 8);

            var dateReturn = (day + "/" + month + "/" + year);
            return dateReturn;
        }

        function getEventDateDay(inputEventDate) {
            var month = inputEventDate.substring(0, 2);
            var day = inputEventDate.substring(2, 4);
            var year = inputEventDate.substring(4, 8);
            var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var convertedMonth = months[month - 1];
            var dt = new Date(convertedMonth + " " + day + "," + year);
            return days[dt.getDay()];
        }
        
        function checkImdbLink(inputImdbLink) {
            var imdbLinkTest = 'imdb.com';
            if(inputImdbLink.match(imdbLinkTest) != null) { //Testing to see if the link is a valid imdb link
                
                request(inputImdbLink, (error, response, html) => { //Testing to see if the link can be connected to
                    if(!error && response.statusCode == 200) {
                        return true;
                    }
                        else {
                            console.log("Link was valid, however a connection could not be established with the domain, please try again later or contact an administrator.");
                            return ;
                        }
                });    
            }
            else {
                console.log("Link input was not valid, please post a valid IMDB link.")
                return false;
            }
        }
    }
}



module.exports = movieEvent;
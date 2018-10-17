# Ｓｏｙｂｏｔ
A fully functional Discord bot designed to centralize several capabilities present in bots such as Rythmbot, Fortressbot, and Mantaro bot. This bot was specifically designed around the needs of the ＳＯＹＷＡＶＥ server, thus may feature very specific and peculiar features, the code may still be very useful for those that wish to create their own bots, or to use Soybot as a base for starting out.

![Soybot logo](https://www.gardenoflife.com/content/wp-content/uploads/2016/02/USDA-Organic.png)

## Features
Soybot features several categories of commands, currently featuring:
* **admin**: Administrative commands, designed to only be accessible to admins
* **affection**: Affection commands, designed to be accessible to all users, and allow users to express their feelings towards another user.
* **experimental**: Experimental commands, designed as a category for commands that are being tested and not designed to be used by anyone other than developers.
* **simple**: Simple commands, designed to be accessible to all users, and features many basic and fun commands.

### Admin Commands
* `s!movieevent` - Post a nicely formatted movie night announcement and convert event time to various timezones - `s!movieevent [movie time (24 hour EST time)] [date of event (MMDDYYY)] [imdb link]`.
### Affection Commands
* `s!brap` - Brush up and fart on a user - `s!brap @user`
* `s!cuddle` - Cuddle with a user - `s!cuddle @user`
* `s!finger` - Flip off a user - `s!finger @user`
* `s!hug` - Hug a user - `s!cuddle @user`
* `s!kiss` - Kiss a user - `s!kiss @user`
* `s!pat` - Pat a user - `s!pat @user`
* `s!punch` - Punch a user - `s!punch @user`
### Experimental
N/A
### Simple
* `s!8ball` - Have a question of your answered by a magic 8 ball - `s!8ball A question?`
* `s!coinflip` - Flip a coin to see if you get heads or tails - `s!coinflip`
* `s!movienight` - Post the server movie night link to rabb.it - `s!movienight`
* `s!raresoy` - Post a rare image of Anthony Soytano - `s!raresoy`

## Getting things up and running 
In order to get Soybot up any running make sure to have a Discord application properly configured at the [Discord Developer page](https://discordapp.com/developers/applications). **Please note: Soybot was not designed to be used as a public bot (therefore that option should be disabled. Many of the features and utilities provided by Soybot are specifically taylored for the ＳＯＹＷＡＶＥ server).** 

### Prerequisites 
Soybot is made possible thanks to NodeJS and discord.js, thus in order for the bot to work properly have the latest stable cession of NodeJS and NPM installed. Afterwards, install the following packages for Soybot to work properly. 
``` 
npm install discord.js discord.js-commando request cheerio fs ytdl-core get-youtube-id youtube-info 
```
#### Optional package
`forever` is a useful package that will allow you to run and manage background nodeJS applications.
```
npm install forever
```

### Starting Soybot
Once you have all the necessary components you can run Soybot simply by executing following command (while in the directory that Soybot is in) 
```
node .
```
Or you can use
```
node index.js
```
Furthermore if you wish to run Soybot as a background service you can use the optional `forever` package. Run Soybot in the background using the following command (while in the Soybot directory)
```
forever start index.js &
```
You can terminate the process with
```
forever stop index.js
```
Or
```
forever stopall
```

## Built with
* [nodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [discord.js](https://discord.js.org/#/)
* [discord.js-commando](https://www.npmjs.com/package/discord.js-commando)
* [request](https://www.npmjs.com/package/request)
* [cheerio](https://www.npmjs.com/package/cheerio)
* [fs](https://www.npmjs.com/package/fs)
* [ytdl-core](https://www.npmjs.com/package/ytdl-core)
* [get-youtube-id](https://www.npmjs.com/search?q=get-youtube-id)
* [youtube-info](https://www.npmjs.com/package/youtube-info)
* [forever](https://www.npmjs.com/package/forever)

## Author
• **Maks Rago** - **Add me on Discord:** A. Soytano#1578

## License
This project is licensed under the GPL v3.0 License - see the [LICENSE.md](LICENSE.md) for details.

## Acknowledgments
* Big thank you to the authors of the [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) documentation.
* Big thank you to [Root's Programming Club](https://www.youtube.com/watch?v=BOnp3G4h7cg) video on creating music bots from scratch, and helping me wrap my head around where to start.


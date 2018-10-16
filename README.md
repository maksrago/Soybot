# Soybot 
A fully functional Discord bot designed to centralize several capabilities present in bots such as Rythmbot, Fortressbot, and Mantaro bot. 

## Getting things up and running 
In order to get Soybot up any running make sure to have a Discord application properly configured at the [Discord Developer page](https://discordapp.com/developers/applications). **Please note: Soybot was not designed to be used as a public bot (therefore that option should be disabled. Many of the features and utilities provided by Soybot are specifically taylored for the SOYWAVE server). 

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


## Author
• **Maks Rago** - **Discord:** A. Soytano#1578

## License
This project is licensed under the GPL v3.0 License - see the [LICENSE.md](LICENSE.md) for details.

## Acknowledgments


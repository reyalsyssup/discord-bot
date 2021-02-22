const Discord = require("discord.js"),
	bot = new Discord.Client(),
	{ tok } = require("./config.json");

//Client constant 
const client = new Discord.Client()

bot.on("ready", () => {
	console.log("Giddy up!");
	//Gets the general channel using the channel id
	var generalChannel = client.channels.get("728075420104130640")
	//Sends a message to general channel
	generalChannel.send("Hello, world!")
});



bot.login(tok);

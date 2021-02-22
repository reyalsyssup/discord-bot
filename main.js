const Discord = require("discord.js"),
	bot = new Discord.Client(),
	{ tok } = require("./config.json");

//Client constant 
const client = new Discord.Client()

bot.on("ready", (msg) => {
	console.log("Giddy up!");
});

client.on('message', (receivedMessage) => {
	//Prevents bot from replying to itself... because that would be very very bad
	if (receivedMessage.author == client.user) {
		return
	}

	//Replys if message is equal to ping
	if(receivedMessage.content === "ping"){
		receivedMessage.reply("pong");
	}
});



bot.login(tok);

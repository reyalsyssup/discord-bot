const Discord = require("discord.js"),
	bot = new Discord.Client(),
	{ tok } = require("./config.json");

bot.on("ready", () => {
	console.log("Giddy up!");
});

bot.login(tok);

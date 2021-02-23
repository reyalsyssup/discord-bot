const Discord = require("discord.js"),
	// client
	bot = new Discord.Client(),
	{ tok, prefix } = require("./config.json");

bot.on("ready", () => {
	console.log("Giddy up!");
});

// msg var is the message the bot picked up
bot.on("message", msg => {
	if (msg.author !== bot.user) {
		if (msg.content === "ping") {
			msg.reply("pong");
		}
		// Prefix commands
		if (msg.content.startsWith(`${prefix}help`)) {
			let helpEmbed = new Discord.MessageEmbed()
				.setColor(0xffaa55)
				.setTitle("Help")
				.setURL("https://reyalsyssup.github.io/discord-bot")
				.addFields({ name: "k!ping", value: 'bot replies with "pong!"' });

			msg.reply(helpEmbed);
		}
	}
});

bot.login(tok);

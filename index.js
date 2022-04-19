const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTY1ODQwMTY3ODA4MTU1Njc5.Yl5CwA.LIbEnB-zNc6iQNe_dcK3k3mD0gQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)   

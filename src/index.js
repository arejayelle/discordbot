const fs = require("fs");
const Discord = require('discord.js');
const dotenv = require('dotenv');
// utility
const getPrevious = require("./utility/getPrevious").getPrevious;
const getServerEmojis = require("./utility/getEmojis.js").getServerEmojis;
const sus = require("./commands/sus").sus;
const study = require("./commands/study").study;

dotenv.config();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(process.env.TOKEN);
client.once('ready', () => {
    console.log('Ready!');
});

const { PREFIX } = process.env;

client.on("message", message => {
    if (!message.content.startsWith(`${PREFIX}`)) return;
    const serverEmojis = getServerEmojis(message.guild.id);

    const parameters = message.content.slice(PREFIX.length).trim().split(' ');
    const command = parameters.shift().toLowerCase();

    console.log(`checking the command!`);
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, parameters);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }


});
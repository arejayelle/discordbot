const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require("fs");
const getPrevious = require("./utility/getPrevious").getPrevious;
const getServerEmojis = require("./utility/getEmojis.js").getServerEmojis;
const sus = require("./commands/sus").sus;
const study = require("./commands/study").study;

dotenv.config();
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.login(process.env.TOKEN);

const commandFiles = fs.readdirSync(`./commands`).filter(file=> file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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
    if (client.commands)
        switch (command) {
            case "hi":
                // message.reply("I am small and green!");
                message.channel.send("I am small and green!");
                break;
            case "egg":
                message.react(serverEmojis.precious);
                break;
            case "sus":
                sus(message, parameters);
                break;
            case "f": //reacts F to the previous message & deletes the command

                getPrevious(message).then((messages) => {
                    messages.first().react(serverEmojis.regional_indicator_F);
                }).catch(console.error);
                message.delete();
                break;
            case "this": //reacts point up to the previous message & deletes the command
                getPrevious(message).then((messages) => {
                    messages.first().react(serverEmojis.point_up);
                    message.delete();
                }).catch(console.error);
                break;
            case "study":
                // send a message in a channel to come study
                // format {prefix}study #channel-to-post-in
                study(client, message, parameters);
                break;
        }

});
const Discord = require('discord.js');
const dotenv = require('dotenv');
const sus = require("./commands/sus").sus;
const getPrevious = require("./utility/getPrevious").getPrevious;
const emojis = require("../emojis.json");
const study = require("./commands/study").study;

dotenv.config();
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.once('ready', () => {
    console.log('Ready!');
});

const { PREFIX } = process.env;

client.on("message", message => {
    if (!message.content.startsWith(`${PREFIX}`)) return;

    const parameters = message.content.slice(PREFIX.length).trim().split(' ');
    const command = parameters.shift().toLowerCase();

    console.log(`checking the command!`);
    switch (command) {
        case "hi":
            // message.reply("I am small and green!");
            message.channel.send("I am small and green!");
            break;
        case "egg":
            message.react(emojis.precious);
            break;
        case "sus":
            sus(message,parameters);
            break;
        case "f": //reacts F to the previous message & deletes the command
            getPrevious(message).then((messages) => {
                messages.first().react(emojis.regional_indicator_F);
            }).catch(console.error);
            message.delete();
            break;
        case "this": //reacts point up to the previous message & deletes the command
            getPrevious(message).then((messages) => {
                messages.first().react(emojis.point_up);
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
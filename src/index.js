const Discord = require('discord.js');
const dotenv = require('dotenv');
const eject = require("./eject").eject;
const getPrevious = require("./utility/getPrevious").getPrevious;
const emojis = require("../emojis.json");
const getChannel = require("./utility/getChannel");
const getUserVoiceChannel = require("./utility/getUserVoiceChannel").getUserVoiceChannel;


dotenv.config();
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.once('ready', () => {
    console.log('Ready!');
});

const { PREFIX } = process.env;

client.on("message", message => {
    if (!message.content.startsWith(`${PREFIX}`)) return;

    const args = message.content.slice(PREFIX.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    console.log(`checking the command!`);
    switch (command) {
        case "hi":
            // message.reply("I am small and green!");
            message.channel.send("I am small and green!");
            break;
        case "egg":
            message.react(emojis.precious);
            break;
        case "eject":
            eject(message, args);
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
            let channelTag = args[0];

            let nerd = message.author.username;
            let voiceChannel = getUserVoiceChannel(message);
            if (!voiceChannel) break;
            
            let announcement = `boop **${nerd}** wants to hang out in **${voiceChannel.name}**`;

            getChannel.byTag(client, channelTag)
                .then((channel) => {
                    channel.send(announcement);
                    message.react(emojis.thumbs_up);
                })
                .catch(() => {
                    message.channel.send(announcement);
                    message.delete();
                }
                )
    }

});
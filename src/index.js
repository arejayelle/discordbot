const Discord = require('discord.js');
const dotenv = require('dotenv');
const eject = require("./eject").eject;
const getPrevious = require("./utility/getPrevious").getPrevious;
const emojis = require("../emojis.json");

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
            let targetChannel = args[0];
            const channelRegex = /<#\d{18}>/;

            let nerd = message.author.username;
            let voiceChannel = message.member.voice.channel
            if (!voiceChannel) {
                message.reply("Please join a voice channel to use this command")
                    .then((message) => {
                        message.delete({ timeout: 5000 });
                    });
                return;
            };

            let announcement = `boop **${nerd}** wants to hang out in **${voiceChannel.name}**`;

            if (typeof (targetChannel) !== "undefined" && targetChannel.match(channelRegex)) {
                targetChannel = targetChannel.substr(2, 18);
                client.channels
                    .fetch(targetChannel)
                    .then(channel => {
                        channel.send(announcement);
                        message.react(emojis.thumbs_up);
                    })
            } else {
                message.channel.send(announcement);
                message.delete();
            }

    }

});
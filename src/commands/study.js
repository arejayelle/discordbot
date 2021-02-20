const Discord = require('discord.js');
const emojis = require("../../emojis.json");
const getUserVoiceChannel = require("../utility/getUserVoiceChannel").getUserVoiceChannel;
const getChannel = require("../utility/getChannel");

function study(client, message, parameters){
    let channelTag = parameters[0];

    let nerd = message.member.displayName;
    let voiceChannel = getUserVoiceChannel(message);
    if (!voiceChannel) return;
    
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

exports.study = study;
const Discord = require('discord.js');
const getEmojis = require("../utility/getEmojis").getEmojis;
const getUserVoiceChannel = require("../utility/getUserVoiceChannel").getUserVoiceChannel;
const getChannel = require("../utility/getChannel");

function study(client, message, parameters){
    const channelTag = parameters[0];

    const nerd = message.member.displayName;
    const voiceChannel = getUserVoiceChannel(message);
    const emojis = getEmojis(message.guild.id);
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
const Discord = require('discord.js');
const getServerEmojis = require("../utility/getEmojis.js").getServerEmojis;
const getUserVoiceChannel = require("../utility/getUserVoiceChannel").getUserVoiceChannel;
const getChannel = require("../utility/getChannel");

function study(client, message, parameters){
    const channelTag = parameters[0];

    const nerd = message.member.displayName;
    const voiceChannel = getUserVoiceChannel(message);
    const serverEmojis = getServerEmojis(message.guild.id);
    if (!voiceChannel) return;
    
    let announcement = `boop **${nerd}** wants to hang out in **${voiceChannel.name}**`;

    getChannel.byTag(client, channelTag)
        .then((channel) => {
            channel.send(announcement);
            message.react(serverEmojis.thumbs_up);
        })
        .catch(() => {
            message.channel.send(announcement);
            message.delete();
        }
        )
}

module.exports = {
    name: 'study',
    description : 'tell people to come study with you',
    execute(message, parameters) {
        study(message.client, message, parameters);
    }
}


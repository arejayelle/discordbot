const Discord = require('discord.js');

function getUserVoiceChannel(message){
    let voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
        message.reply("Please join a voice channel to use this command")
            .then((message) => {
                message.delete({ timeout: 5000 });
            });
        return false;
    };
    return voiceChannel;
}

exports.getUserVoiceChannel = getUserVoiceChannel;
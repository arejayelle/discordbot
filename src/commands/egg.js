const Discord = require('discord.js');
const getServerEmojis = require("../utility/getEmojis.js").getServerEmojis;

module.exports = {
    name: 'egg',
    description: 'nubb will give you an egg!',
    execute(message, args) {

        const serverEmojis = getServerEmojis(message.guild.id);
        message.react(serverEmojis.precious);
    }
}
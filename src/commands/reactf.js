const Discord = require('discord.js');
const getServerEmojis = require("../utility/getEmojis.js").getServerEmojis;
const reactToPrevious = require("../utility/reactToPrevious").reactToPrevious;
module.exports = {
    name: 'f',
    description: 'pay respects to whatever was posted before',
    execute(message, args) {
        const serverEmojis = getServerEmojis(message.guild.id);

        reactToPrevious(message, serverEmojis.regional_indicator_F);
    }
}
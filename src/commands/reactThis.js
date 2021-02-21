const Discord = require('discord.js');
const getServerEmojis = require("../utility/getEmojis.js").getServerEmojis;
const reactToPrevious = require("../utility/reactToPrevious").reactToPrevious;
module.exports = {
    name: 'this',
    description: 'Agree/bring attention to whatever was posted before',
    execute(message, args) {
        const serverEmojis = getServerEmojis(message.guild.id);

        reactToPrevious(message, serverEmojis.point_up);
    }
}
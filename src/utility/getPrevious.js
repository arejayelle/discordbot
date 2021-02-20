const Discord = require('discord.js');
function getPrevious(message){
 return  message.channel.messages.fetch({ limit: 1, before: message.id });
}
exports.getPrevious= getPrevious;
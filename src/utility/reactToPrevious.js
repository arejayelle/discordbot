const Discord = require('discord.js');
const getPrevious = require('./getPrevious').getPrevious;

function reactToPrevious(message, react){

    getPrevious(message).then((messages) => {
        messages.first().react(react);
    }).catch(console.error);
    
    message.delete();
}

module.exports = {
    reactToPrevious : reactToPrevious
}
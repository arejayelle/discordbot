const Discord = require('discord.js');

function reactToPrevious(message, react){

    getPrevious(message).then((messages) => {
        messages.first().react(react);
    }).catch(console.error);
    
    message.delete();
}

module.exports = {
    reactToPrevious
}
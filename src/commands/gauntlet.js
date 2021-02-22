const Discord = require('discord.js');
const getServerEmojis = require("../utility/getEmojis.js").getServerEmojis;
const countReacts = require("../utility/countReacts").countReacts;


function gauntlet(message){
        const serverEmojis = getServerEmojis(message.guild.id);
        //const serverEmojis = require("../utility/emojis/CEServer.json");;
        let gauntlet = [];

        message.channel.send("It's tournament time! Register your emojis").then((registrationMessage) => {

            const filter = (reaction) => {
                return true;
            };

            // for testing. Remove later
            registrationMessage.react(serverEmojis.thumbs_up);
            registrationMessage.react(serverEmojis.precious);

            countReacts(registrationMessage, filter, 7000).then(counted=>{

            })

        })
        message.react(serverEmojis.precious);
    
}
module.exports = {
    name: 'gauntlet',
    description: 'It\'s tournament time!',
    execute(message, args) {
        gauntlet(message);
    }
}
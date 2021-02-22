const Discord = require('discord.js');
const countReacts = require("./countReacts").countReacts;

function versus(message, emote1, emote2) {
    message.react(emote1).then(() => message.react(emote2));

    const filter = (reaction) => {
        return [emote1, emote2].includes(reaction.emoji.name);
    };

    return new Promise(resolve => {
        countReacts(message, filter, 5000).then(countResult => {
            countResult.sort((a,b) => b.count -a.count );
            resolve(countResult[0].name);
        })
    })
}
exports.versus = versus;
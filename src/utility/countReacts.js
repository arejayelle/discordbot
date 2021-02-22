const Discord = require('discord.js');
function countReacts(message, filter, waitTime) {
    let result;

    return new Promise(resolve => {
        console.log("awaiting reacts");
        message.awaitReactions(filter, { time: waitTime })
            .then(collected => {

                console.log("collecting");
                result = collected
                    .map((react) => {
                        return { "name": react.emoji.name, "count": react.count }
                    });

                resolve(result);
            }).catch(() => {
                console.log("nope");
            })

    })
}
exports.countReacts = countReacts;
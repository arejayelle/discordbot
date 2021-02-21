const Discord = require('discord.js');
const getServerEmojis = require("../utility/getEmojis.js").getServerEmojis;

function susVote(message, parameters) {
    var sus = parameters.join(" ");
    const serverEmojis = getServerEmojis(message.guild.id);
    message.channel.send(`${sus} is sus.. Vote them out?`).then((botMessage) => {

        botMessage.react(serverEmojis.skull).then(() => botMessage.react(serverEmojis.no_evil));
        const filter = (reaction) => {
            return [serverEmojis.skull, serverEmojis.no_evil].includes(reaction.emoji.name);
        };

        if (botMessage.mentions.members.first()){
            sus = botMessage.mentions.members.first().displayName;
        }
            sus = botMessage.mentions.roles.first().name
        }

        botMessage.awaitReactions(filter, { time: 10000 })
            .then(collected => {
                var i = 0
                var store = [];

                collected.forEach((react) => {
                    console.log(`${react.count}`);
                    store[i++] = react.count;
                })

                if (store[0] > store[1]) {
                    eject(message, sus)
                }
                else if (store[0] == store[1]) {
                    if (store[0] == 1) { message.channel.send("No one was ejected.... cause no one voted :cry:"); }
                    else { message.channel.send("No one was ejected (there was a tie)"); }
                }
                else {
                    message.channel.send(`${sus} was voted innocent`);
                }
            }).catch(() => {
                console.log("nope");
            })
    })
}
function eject(message, sus) {

    console.log(sus);
    let val = Math.floor(Math.random() * 10);

    let innocentMsg = `\`\`\`
    . 　　　。　　　　•　 　ﾟ　　。 　　.
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    　　ﾟ　   　${sus} was ejected.　 。　.
    　　'　　 ${sus} was NOT an Imposter 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .\`\`\``;

    let imposterMsg = `\`\`\`
    . 　　　。　　　　•　 　ﾟ　　。 　　.
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    　　ﾟ　   　${sus} was ejected.　 。　.
    　　'　　 ${sus} was The Imposter 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .\`\`\``;

    if (((message.content.toLowerCase().includes("nubb"))) ||
        (val < 7 && !(message.content.toLowerCase().includes("egg")))) {
        message.channel.send(innocentMsg);
    }
    else {
        message.channel.send(imposterMsg);
    }

}
exports.sus = susVote;
const Discord = require('discord.js');
const getEmojis = require("../utility/getEmojis").getEmojis;

function susVote(message, parameters) {
    var sus = parameters.join(" ");
    const emojis = getEmojis(message.guild.id);
    message.channel.send(`${sus} is sus.. Vote them out?`).then((botMessage) => {

        botMessage.react(emojis.skull).then(() => botMessage.react(emojis.no_evil));
        const filter = (reaction) => {
            return [emojis.skull, emojis.no_evil].includes(reaction.emoji.name);
        };

        botMessage.awaitReactions(filter, { time: 5000 })
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

    let val = Math.floor(Math.random() * 10);

    let imposterMsg = `. 　　　。　　　　•　 　ﾟ　　。 　　.
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    　　ﾟ　   　${sus} was ejected.　 。　.
    　　'　　 ${sus} was NOT an Imposter 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .`;

    let innocentMsg = `. 　　　。　　　　•　 　ﾟ　　。 　　.
    　　　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    　　ﾟ　   　${sus} was ejected.　 。　.
    　　'　　 ${sus} was The Imposter 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .`;

    if (val < 7 && !(message.content.toLowerCase().includes("egg"))) {
        message.channel.send(innocentMsg);
    }
    else {
        message.channel.send(imposterMsg);
    }

}
exports.sus = susVote;
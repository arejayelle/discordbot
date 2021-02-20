const Discord = require('discord.js');
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
exports.eject = eject;
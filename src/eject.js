const Discord = require('discord.js');
function eject(message, args){

    let val = Math.floor(Math.random()*10);


    if(val<7 && !(message.content.toLowerCase().includes("egg"))){
        message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
        　　　.　　　 　　.　　　　　。　　 。　. 　
        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
        　　ﾟ　   　${args.join(" ")} was ejected.　 。　.
        　　'　　 ${args.join(" ")} was NOT an Imposter 　 　　。
        　　ﾟ　　　.　　　. ,　　　　.　 .`);
    }
    else{
        message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
        　　　.　　　 　　.　　　　　。　　 。　. 　
        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
        　　ﾟ　   　${args.join(" ")} was ejected.　 。　.
        　　'　　 ${args.join(" ")} was The Imposter 　 　　。
        　　ﾟ　　　.　　　. ,　　　　.　 .`);
    }

}
exports.eject= eject;
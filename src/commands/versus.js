const getServerEmojis = require("../utility/getEmojis.js").getServerEmojis;
const versus = require("../utility/versus").versus;

module.exports = {
    name: 'versus',
    description: 'compare two excellent options',
    execute(message, args) {
        const serverEmojis = getServerEmojis(message.guild.id);

        message.channel.send(`${serverEmojis.thumbs_up} vs ${serverEmojis.skull}`)
            .then(challengeMsg => {
                challengeMsg.react(serverEmojis.thumbs_up).then(() => {
                    challengeMsg.react(serverEmojis.skull);
                })
                versus(challengeMsg, serverEmojis.thumbs_up, serverEmojis.skull)
                .then(resultName =>{

                    challengeMsg.edit(`${serverEmojis.thumbs_up} vs ${serverEmojis.skull}\n ${resultName} wins!`)
                })
            })
    }
}
module.exports = {
    name: 'hi',
    description: 'Say hi to nubb',
    execute(message, args) {
        // message.reply("I am small and green!");
        message.channel.send("I am small and green!");
    }
}
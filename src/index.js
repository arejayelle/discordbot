const Discord = require('discord.js');
const dotenv = require('dotenv');
const eject = require("./eject").eject;

dotenv.config();
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.login(process.env.TOKEN);

const { SECRET, PREFIX } = process.env;

client.on("message", message => {
    if (!message.content.startsWith(`${PREFIX}hi`)) return;
    message.reply("I am small and green!");
})
client.on("message", message => {
    if (!message.content.startsWith(`${PREFIX}egg`)) return;
    message.react("812539765088976916");
})

client.on("message", message => {
    if (!message.content.startsWith(`${PREFIX}`)) return;

    const args = message.content.slice(PREFIX.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
        case "eject":
            eject(message, args);
            break;
        case "f":
            message.channel.messages.fetch({ limit: 1, before: message.id }).then((messages) => {

                messages.first().react(`🇫`);

            }).catch(console.error);
            message.delete();

            break;

    }

});
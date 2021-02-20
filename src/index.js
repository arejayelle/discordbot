const Discord = require('discord.js');
const dotenv = require('dotenv');

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


const dotenv = require('dotenv');
dotenv.config();
// ... client setup (keep reading)
console.log(process.env.A);
console.log(process.env.B);

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.login(process.env.TOKEN);

client.on("message", message=>{
    console.log(message.content);
})
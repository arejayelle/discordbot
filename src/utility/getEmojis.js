const dotenv = require('dotenv');
dotenv.config();

function getServerEmojis(guildID) {
    switch (guildID) {
        case process.env.ZozTestID:
            return require("./emojis/ZTServer.json");
        case process.env.CobbleEngID:
            return require("./emojis/CEServer.json");
    }
}

exports.getServerEmojis = getServerEmojis;
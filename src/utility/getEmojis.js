const dotenv = require('dotenv');
dotenv.config();

function getEmojis(guildID) {
    switch (guildID) {
        case process.env.ZozTestID:
            return require("./emojis/ZTServer.json");
        case process.env.CobbleEngID:
            return require("./emojis/CEServer.json");
    }
}

exports.getEmojis = getEmojis;
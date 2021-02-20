const Discord = require('discord.js');

function parseTag(tag) {
    const channelRegex = /<#\d{18}>/;

    if (typeof (tag) !== "undefined" && tag.match(channelRegex)) {
        return tag.substr(2, 18);
    }
    return null;
}

function getChannelByTag(client, tag) {
    const channelID = parseTag(tag);
    if (typeof (channelID) === null)
        return new PromiseRejectionEvent();
    return client.channels
        .fetch(channelID)
}

exports.parseTag = parseTag;
exports.byTag = getChannelByTag;
exports.run = (client, message, args) => {
    // Moderator, Developer are from my server role. If you have a different role name for mods or etc, edit this...
    if (message.member.roles.cache.some(role => role.name === 'Moderator' || role.name === 'Developer' || role.name === "OWNER")) {
        var amt = args[0];

        if (typeof amt ==='undefined') {
            amt = 100;
        } else {
            amt++;
        }

        message.channel.messages.fetch({limit: amt})
            .then((amt) => {
                message.channel.bulkDelete(amt);
            })
    } else {
        message.reply('I\'m sorry, you do not have permission for this command.');
    }
}

exports.help = {
    name: "clear",
    category: "Tools",
    description: "Allows user to clear an amount of messages from a specific channel.",
    usage: "clear [user] [#]",
    example: "",
}
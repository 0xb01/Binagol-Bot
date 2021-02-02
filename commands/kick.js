exports.run = (client, message, args) => {
    // Moderator, Developer are from my server role. If you have a different role name for mods or etc, edit this...
    if (message.member.roles.cache.some(role => role.name === 'Moderator' || role.name === 'Developer' || role.name === "OWNER")) {
        const usr = message.mentions.users.first()
        var res = args.slice(1).join(' ');

        if (res === '') {
            res = 'No reason'
        }

        if (usr) {
            // mention user
            const mem = message.guild.member(usr)
            if (mem) {
                // if mentioned user is in the server
                mem
                    .kick(res)
                    .then(() => {
                        message.reply(`user ${usr.tag} kicked.`)
                    })
                    .catch(err => {
                        message.reply('unable to kick member.')
                        console.error(err)
                    })
            } else {
                message.reply('user not in this server.')
            }
        } else {
            message.reply('no user was mentioned.')
        }
    } else {
        message.reply('you do not have permission for this command.')
    }
}

exports.help = {
    name: "kick",
    category: "Moderation",
    description: "Allows a specific role to kick a member.",
    usage: "kick [user] [reason]",
    example: "",
}
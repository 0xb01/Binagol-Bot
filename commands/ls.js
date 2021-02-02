exports.run = (client, message, args, content, cooldown, command, Discord, config) => {
    client.guilds.cache.forEach((guild) => {
        message.reply(`**${guild.name}** has **${guild.memberCount}** members. *Bots included.*`);
    });
}

exports.help = {
    name: "ls",
    category: "Tools",
    description: "Allows user to see total members in the server.",
    usage: "ls",
    example: ""
}
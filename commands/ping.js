exports.run = (client, message) => {
    message.reply(`pong! **${Math.round(client.ws.ping)}ms**`);
}

exports.help = {
    name: "ping",
    category: "Tools",
    description: "Allows user to ping the server, returning response time.",
    usage: "ping",
    example: ""
}
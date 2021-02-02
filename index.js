const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const prefix = config.prefix;

client.on('ready', () => {
    console.log('Bot started.');

    // change presence
    client.user.setPresence({
        activity: {
            name: 'Binagol',
            type: 2
        },
    });
});

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    if (message.content.includes('/')) return;

    // commands
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const content = message.content.substring(prefix.length + command, message.content.length - prefix.length - command.length);

    try {
        let cf = require(`./commands/${command}.js`);
        cf.run(client, message, args, content, command, Discord, config);
    } catch (err) {
        message.reply(`invalid command: ${command}`);
        console.log(err);
    }
});

client.login(config.token)
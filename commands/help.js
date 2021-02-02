const fs = require('fs');
const Discord = require('discord.js');

const config = require('../config.json');
const prefix = config.prefix;

exports.run = (client, message, args) => {
    var req = args[0];
    var embed;

    // create command list
    var files = fs.readdirSync('./commands/');
    const commands = [];
    for (i in files) {
        var cmd = files[i];
        commands.push(cmd.replace('.js', ''));
    }
    // if no category, display as general
    if (typeof req === 'undefined') {
        // loop commands and create a separate category
        var categoryList = [];
        for (i in commands) {
            var cmd = require('../commands/' + commands[i] + '.js');
            if (categoryList.indexOf(cmd.help.category) < 0) {
                categoryList.push(cmd.help.category);
            }
        }
        var result = '';
        for (var i = 0; i < categoryList.length; i++) {
            result += ('- ' + String(categoryList[i] + '\n'));
        }
        embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTimestamp()
            .setFooter(`${prefix}help`)
            .setDescription(`For a list of commands type **${prefix}help [category]**. \n\nThe **categories** available are: \n${result}`);
    } else {
        // if category is listed, display all commands within
        if (req.toLowerCase() === 'owner' && message.author.id !== config.owner) {
            message.reply('I\'m sorry, you do not have permission for this command.');
        } else {
            // embed
            embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTimestamp()
                .setFooter(`${prefix}help`)
                for (y in commands) {
                    var cmd = require('../commands/' + commands[y] + '.js');
                    if(cmd.help.category.toLowerCase() === req.toLowerCase()) {
                        embed.addField(`${prefix}${cmd.help.usage}`, `*${cmd.help.description}*`);
                    }
                }
        }
    }
    try {
        message.reply({embed});
    } catch (error) {
        console.log(error);
    }
}

exports.help = {
    name: 'help',
    category: 'Info',
    description: 'Displays all commands available for this bot.',
    usage: 'help [category]',
    example: ''
}
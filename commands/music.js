const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const config = require('../config.json');
const server = config.server;
const channel = config.music_channel;
const stream = config.music_link;

exports.run = async (client) => {
    let chann = client.channels.cache.get(channel) || await client.channels.fetch(channel);
    if (!chann) return;
    const conn = await chann.join();
    conn.play(ytdl(stream));

    setInterval(async function() {
        if (!client.voice.connections.get(server)) {
            let chann = client.channels.cache.get(channel) || await client.channels.fetch(channel);
            if(!chann) return;

            const conn = await chann.join();
            conn.play(ytdl(stream));
        }
    }, 20000);
}

exports.help = {
    name: 'music',
    category: 'Fun',
    description: 'Allows the bot to stream music.',
    usage: 'music',
    example: ''
}
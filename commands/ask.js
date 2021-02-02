exports.run = (client, message, args) => {
    var res = args.slice(0).join(' ');

    // if blank
    if (res === '') {
        return message.reply('no question');
    }

    // if does not end with question mark
    if (!message.content.includes('?')) {
        return message.reply('not a question');
    }

    var res = [
        'oo',
        'sure',
        'pwede',
        'depende',
        'ha?',
        'totoo?',
        'mamaya na',
        'tinatamad ako',
        'latur',
        'bhie, later...',
        'ugh, my head hurts, yes',
        'yes, harder',
        'push it harder, yes',
        'hahahaha, joke lang',
        '99.9%',
        '100%',
        'opo',
        'yup'
    ];

    const rand = Math.floor(Math.random() * res.length);
    message.reply(res[rand]);
}

exports.help = {
    name: "ask",
    category: "Fun",
    description: 'Ask bot anything.',
    usage: "ask [message]",
    example: "",
}
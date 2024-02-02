
module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.content.toLowerCase() === 'ping') {
            message.reply('Pong!');
        }

        if (message.content.toLowerCase() === 'bonjour') {
            message.reply('Bonjour!');
        }
    },
};
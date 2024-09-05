import { chocoblast } from '../commands/chocoblast.js';
import { cowsaybigeyes } from '../commands/cowsays.js';

const PREFIX = '/';

const commandHandler = async (message) => {
    const [command, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);



    try {
        switch (command) {
            case 'chocoblast':
                const author = args[0];


                const chocoblastMessage = chocoblast(message.author.username, author);
                await message.reply(chocoblastMessage);
                break;
            case 'cowsay':
                if (args.length > 0) {
                    const cowsayMessage = cowsaybigeyes(args.join(' '));
                    await message.reply('```\n' + cowsayMessage + '\n```');
                } else {
                    await message.reply('Please provide text for cowsay.');
                }
                break;
            default:
                await message.reply('Unknown command.');
                break;
        }
    } catch (error) {
        console.error('Error handling command:', error);
        await message.reply('There was an error processing your command.');
    }
};

export default commandHandler;

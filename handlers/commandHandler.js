import path from 'path';
import fs from 'fs';

const PREFIX = '/';

// Charger les commandes dynamiquement
const loadCommand = (filename, methodname) => {
    const commandPath = path.resolve(__dirname, `../commands/${filename}.js`);
    if (!fs.existsSync(commandPath)) {
        console.error(`Command file ${commandPath} does not exist.`);
        return () => 'Command file not found.';
    }
    const commandModule = require(commandPath);
    return commandModule[methodname] || (() => 'Method not found.');
};

// Gérer les commandes
const commandHandler = async (message) => {
    const [command, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

    try {
        switch (command) {
            case "chocoblast":
                const chocoblastCommand = loadCommand("chocoblast", "chocoblast");
                await message.reply(chocoblastCommand(message.author));
                break;
            case "cowsay":
                if (args.length > 0) {
                    const cowsayCommand = loadCommand("cowsays", "cowsaybigeyes");
                    const text = args.join(' ');
                    await message.reply('```\n' + cowsayCommand(text) + '\n```');
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
        await message.reply('There was an error processing your command.' + error);
    }
};

export default commandHandler;

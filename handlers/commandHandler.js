import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PREFIX = '/';

// Charger les commandes dynamiquement
const loadCommand = async (filename, methodname) => {
    const commandPath = path.resolve(__dirname, `../commands/${filename}.js`);
    if (!fs.existsSync(commandPath)) {
        console.error(`Command file ${commandPath} does not exist.`);
        return () => 'Command file not found.';
    }
    try {
        const commandModule = await import(`file://${commandPath}`);
        return commandModule[methodname] || (() => 'Method not found.');
    } catch (error) {
        console.error(`Error loading command module ${commandPath}:`, error);
        return () => 'Error loading command module.';
    }
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
                const chocoblastCommand = await loadCommand("chocoblast", "chocoblast");
                await message.reply(chocoblastCommand(message.author));
                break;
            case "cowsay":
                if (args.length > 0) {
                    const cowsayCommand = await loadCommand("cowsays", "cowsaybigeyes");
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
        await message.reply('There was an error processing your command.');
    }
};

export default commandHandler;

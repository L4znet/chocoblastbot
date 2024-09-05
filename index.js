import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';


dotenv.config();
const token = process.env.TOKEN;
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const PREFIX = "/";

// Charger les commandes dynamiquement
const loadCommand = (filename, methodname) => {
    const commandPath = path.resolve(__dirname, `commands/${filename}.js`);
    const commandModule = require(commandPath);
    return commandModule[methodname];
};

// Gérer l'événement lorsque le bot est prêt
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Gérer les messages entrants
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
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
                    }
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error('Error handling command:', error);
            await message.reply('There was an error processing your command.');
        }
    }
});

// Connexion au bot Discord
client.login(token);
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();
const token = process.env.TOKEN;
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PREFIX = "/";

const loadCommand = async (filename, methodname) => {
    const commandModule = await import(`./commands/${filename}.mjs`);
    return commandModule[methodname];
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        const [command, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

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
                }
                break;
            default:
                break;
        }
    }
});

client.login(token);

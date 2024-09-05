import { Client, GatewayIntentBits, Events } from 'discord.js';
import dotenv from 'dotenv';
import { chocoblast } from './commands/chocoblast.js';  // Adjust path if necessary
import { cowsaybigeyes } from './commands/cowsays.js';  // Adjust path if necessary
import commandHandler from './handlers/commandHandler.js';

dotenv.config();
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('Discord Token is missing. Please set the TOKEN environment variable.');
    process.exit(1);
}

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Handle the 'ready' event
client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Handle messages
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('/')) {
        await commandHandler(message);
    }
});

// Handle interactions (including slash commands)
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    try {
        switch (commandName) {
            case 'chocoblast':
                const victime = options.getString('victime');
                const author = options.getString('author') || '';
                const chocoblastMessage = chocoblast(victime, author);
                await interaction.reply(chocoblastMessage);
                break;
            case 'cowsay':
                const text = options.getString('text');
                const cowsayMessage = cowsaybigeyes(text);
                await interaction.reply('```\n' + cowsayMessage + '\n```');
                break;
            default:
                await interaction.reply('Unknown command.');
                break;
        }
    } catch (error) {
        console.error('Error handling command:', error);
        await interaction.reply('There was an error processing your command.');
    }
});

// Login to Discord
client.login(token).catch(error => {
    console.error('Failed to login:', error);
    process.exit(1);
});

export default client; // Export client if needed elsewhere

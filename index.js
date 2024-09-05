import { Client, GatewayIntentBits, Events } from 'discord.js';
import dotenv from 'dotenv';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { chocoblast } from './commands/chocoblast.js';
import { cowsaybigeyes } from './commands/cowsays.js';

dotenv.config();
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId || !guildId) {
    console.error('Missing environment variables. Please check your .env file.');
    process.exit(1);
}

// Définir les commandes slash
const commands = [
    {
        name: 'chocoblast',
        description: "Pour chocoblaster quelqu'un.",
        options: [
            {
                type: 3,
                name: 'author',
                description: "L'auteur du chocoblast",
                required: false,
            },
        ],
    },
    {
        name: 'cowsay',
        description: "Pour faire dire quelque chose à une vache avec des gros yeux.",
        options: [
            {
                type: 3,
                name: 'text',
                description: "Le texte à faire dire à la vache",
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Error deploying commands:', error);
    }
})();

// Créer un nouveau client Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Gérer l'événement lorsque le bot est prêt
client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Gérer les interactions (y compris les commandes slash)
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    try {
        switch (commandName) {
            case 'chocoblast':
                const author = options.getString('author');
                const chocoblastMessage = chocoblast(interaction.user.username , author);
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

// Connexion au bot Discord
client.login(token).catch(error => {
    console.error('Failed to login:', error);
    process.exit(1);
});

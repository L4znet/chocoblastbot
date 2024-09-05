import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

console.log('Starting command deployment...'); // Debugging log

const commands = [
    {
        name: 'chocoblast',
        description: "Pour chocoblaster quelqu'un",
        options: [
            {
                type: 3,
                name: 'author',
                description: "L'auteur du chocoblast (optionnel)",
                required: false,
            },
        ],
    },
    {
        name: 'cowsay',
        description: 'Générer un texte avec cowsay.',
        options: [
            {
                type: 3,
                name: 'text',
                description: 'Le texte que vous souhaitez que la vache dise',
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

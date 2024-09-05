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
        description: 'Send a special message!',
    },
    {
        name: 'cowsay',
        description: 'Generate text with cowsay.',
        options: [
            {
                type: 3, // STRING type
                name: 'text',
                description: 'Text to generate with cowsay',
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

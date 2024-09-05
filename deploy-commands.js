import { REST, Routes } from '@discordjs/rest';
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID; // Your bot's client ID
const guildId = process.env.GUILD_ID;   // The guild (server) ID where you want to register commands

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
        console.error(error);
    }
})();

import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import commandHandler from './handlers/commandHandler.js';

dotenv.config();
const token = process.env.TOKEN;
if (!token) {
    console.error('Token is missing. Please set the TOKEN environment variable.');
    process.exit(1);
}

// Créer un nouveau client Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Gérer l'événement lorsque le bot est prêt
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Gérer les messages entrants
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('/')) {
        await commandHandler(message);
    }
});

// Connexion au bot Discord
client.login(token).catch(error => {
    console.error('Failed to login:', error);
    process.exit(1);
});

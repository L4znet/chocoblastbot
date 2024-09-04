import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.TOKEN
const client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent] });



client.on('ready', async () => {

    client.on("messageCreate", (message) => {
        if (message.author.bot) return;

        console.log(message.author.username + ": " + message.content);
        if (message.content === "/chocoblast") {
            message.reply("🔥 Voilà quelque chose de spécial pour vous : **" + message.author.username + "** s'est fait chocoblast 🍫");
        }
    });
});

client.login(token);
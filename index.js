// Importa a biblioteca discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Cria o client (bot) com intents básicas
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Coloque o token do seu bot aqui
const TOKEN = process.env.Token;

// Evento quando o bot ficar online
client.once('ready', () => {
    console.log(`Bot online: ${client.user.tag}`);
});

// Evento quando alguém envia mensagem (exemplo simples)
client.on('messageCreate', message => {
    if(message.content === "!ping") {
        message.reply("Pong!");
    }
});

// Loga o bot com o token
client.login(TOKEN);
    

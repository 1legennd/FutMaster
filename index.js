// Importa a biblioteca discord.js
const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');

// Cria o client (bot) com intents básicas
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Pega o token da variável de ambiente
const TOKEN = process.env.TOKEN;

// Evento quando o bot ficar online
client.once('ready', () => {
    console.log(`Bot online: ${client.user.tag}`);
});

// Comando simples de teste
client.on('messageCreate', message => {
    if(message.content === "!ping") {
        message.reply("Pong!");
    }

    // Comando ;coletar que envia uma imagem de exemplo
    if(message.content === ";coletar") {
        // Aqui você pode colocar o caminho da imagem do jogador
        const attachment = new AttachmentBuilder('exemplo-jogador.png'); 
        message.reply({ files: [attachment] });
    }
});

// Loga o bot com o token
client.login(TOKEN);
    

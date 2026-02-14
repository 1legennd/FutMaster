const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TOKEN = process.env.TOKEN;

const cartas = [
  {
    nome: "Neymar Jr",
    time: "Al-Hilal",
    posicao: "PE",
    liga: "Saudi League",
    valor: "€60M",
    habilidade: "Drible mágico",
    imagem: "https://i.imgur.com/4AiXzf8.jpeg"
  }
];

client.once('ready', () => {
  console.log(`Bot online: ${
    

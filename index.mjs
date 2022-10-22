import { Client, Events, GatewayIntentBits, EmbedBuilder, Routes  } from 'discord.js';
import { REST } from '@discordjs/rest';
import { ultimoSorteio } from './bicho.mjs'
import config from "./config.json" assert { type: "json" };

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const commands = [
  {
    name:'sorteio',
    description:'Pega o último sorteio do bicho!'
  }
];

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(config.cliendId), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'sorteio'){
    let sorteioMap = await ultimoSorteio();

    const embed = new EmbedBuilder()
	    .setTitle('Último sorteio do bicho:')
	    .setColor(0x00FFFF)

    for(const val of sorteioMap){
      embed.addFields({'name': val[0], 'value': val[1], inline: true})
    }
    await interaction.reply({ embeds: [ embed ] });
  }
  });

// Log in to Discord with your client's token
client.login(config.token);
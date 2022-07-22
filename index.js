import { EmbedBuilder, WebhookClient } from 'discord.js';
import cron from 'node-cron';
import { ultimoSorteio } from './bicho.js'

//const { webhookId, webhookToken } = require('./config.json');

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1000125115171868722/M_sNi0PbvxC2no2ebVwHBLz51ncTy9ITSWdTRvNc6hOSxyF-IlHph-h-Rzkr7vEoU8mz' });

let sorteioMap = await ultimoSorteio();
const embed = new EmbedBuilder()
	.setTitle('Último Sorteio do Bicho')
	.setColor(0x00FFFF)
  .addFields({'name': 'Nome', 'value': JSON.stringify(Object.fromEntries(sorteioMap))})

webhookClient.send({
  avatarURL: 'https://img.lovepik.com/element/45004/4926.png_860.png',
  embeds: [embed],
});

/*
// Cron pra rodar toda semana e enviar o sorteio
cron.schedule('* 00 10 * * 2', () =>{

  const embed = new EmbedBuilder()
	.setTitle('Último Sorteio do Bicho')
	.setColor(0x00FFFF)
  .addFields();

  let map = ultimoSorteio();
  webhookClient.send({
    content: 'Webhook test',
    avatarURL: 'https://img.lovepik.com/element/45004/4926.png_860.png',
    embeds: [embed],
  });
})
*/


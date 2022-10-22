import { EmbedBuilder, WebhookClient } from 'discord.js';
import cron from 'node-cron';
import { ultimoSorteio } from './bicho.js'

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1000125115171868722/M_sNi0PbvxC2no2ebVwHBLz51ncTy9ITSWdTRvNc6hOSxyF-IlHph-h-Rzkr7vEoU8mz' });

let sorteioMap = await ultimoSorteio();

const embed = new EmbedBuilder()
	.setTitle('Último sorteio do bicho:')
	.setColor(0x00FFFF)

  for(const val of sorteioMap){
  embed.addFields({'name': val[0], 'value': val[1], inline: true})
  }

  webhookClient.send({
    avatarURL: 'https://img.lovepik.com/element/45004/4926.png_860.png',
    embeds: [embed],
  });


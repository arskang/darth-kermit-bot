import * as Discord from 'discord.js';
import { wait } from '../../helpers';
import { EMO_DARTH_KERMIT, EMO_DRINKTEA, EMO_EM_KERMIT } from '../../helpers/emoji';
import { ROLE_COCHINON_FISGON_MORBOSON_ID } from '../../helpers/roles';

export async function handlePing(message: Discord.Message<boolean>, client: Discord.Client<boolean>): Promise<void> {
	if (message.author.bot) return;
  const m = await message.reply('Se me antoja una mosca... :fly:');
  await wait(2000);
  await m.edit(`:fly:  :fly:  :fly:`);
  await wait(1000);
  await m.edit(EMO_EM_KERMIT);
  await wait(1000);
  await m.edit(EMO_DRINKTEA);
  await wait(1000);
  await m.edit(`Pong! ${EMO_DARTH_KERMIT}`);   
}

export async function handleOtherMessages(message: Discord.Message<boolean>, client: Discord.Client<boolean>): Promise<void> {
  if (message.author.bot) return;
	const guild = client.guilds.cache.get(message.guildId || '');
  if (!guild) return;
  const member = await guild.members.fetch(message.author.id);
  if (!member) return;
  if (!member.roles.cache.has(ROLE_COCHINON_FISGON_MORBOSON_ID)) return;
  
  // console.log({ message });
  const m = await message.reply('https://tenor.com/view/asi-te-queria-agarrar-porki-pato-lucas-meme-gif-11741176');
  await wait(3300);
  await m.edit(EMO_EM_KERMIT);
  await wait(2000);
  await m.edit(`*Bueno, aún no entiendo lo que estás escribiendo.*\nPero te estaré vigilando... <@&${ROLE_COCHINON_FISGON_MORBOSON_ID}>`);   
}
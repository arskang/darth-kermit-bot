import * as Discord from 'discord.js';
import { EMO_DARTH_KERMIT } from '../../helpers/emoji';

export async function handleKermitHi(interaction: Discord.Interaction<Discord.CacheType>): Promise<void> {
  if (!interaction.isCommand()) return;
  await interaction.editReply(EMO_DARTH_KERMIT);
}
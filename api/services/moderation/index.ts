import * as Discord from 'discord.js';
import { EMO_AKKO_SHRUG, EMO_DRINKTEA, EMO_EM_KERMIT } from '../../helpers/emoji';
import { wait } from '../../helpers';

export async function handleBan(interaction: Discord.Interaction<Discord.CacheType>): Promise<void> {
  if (!interaction.isCommand()) return;
  const user = interaction.options.get('usuario');
  const reason = interaction.options.get('razón');
  await interaction.editReply("Mejor deberías darme un mosca... :fly:");
  await wait(1000);
  await interaction.editReply(`Bueno, voy a intentar mutear a<@${user?.user?.id}>...`);
  const targetUser = await interaction.guild?.members.fetch({
    user: user?.user?.id || '',
    force: true,
  });
  if (targetUser?.user.bot) {
    await wait(1000);
    await interaction.editReply(`No me hagas perder el tiempo, no puedo banear a <@${user?.user?.id}> ${EMO_EM_KERMIT}`);
    return;
  }
  if (targetUser?.bannable) {
    await wait(1000);
    await interaction.editReply(`No me hagas perder el tiempo, no puedo banear a <@${user?.user?.id}> ${EMO_EM_KERMIT}`);
    return;
  }
  await wait(1000);
  await targetUser?.ban({ reason: reason?.value?.toString() });
  await interaction.editReply(`Ya he baneado a <@${user?.user?.id}> espero que con esto aprenda la lección...\nRazón: **${reason?.value}** ${EMO_AKKO_SHRUG}`);
}

export async function handleTimeout(interaction: Discord.Interaction<Discord.CacheType>): Promise<void> {
  if (!interaction.isCommand()) return;
  const user = interaction.options.get('usuario');
  const reason = interaction.options.get('razón');
  const timeout = interaction.options.get('tiempo');
  await interaction.editReply("Mejor deberías darme un mosca... :fly:");
  await wait(1000);
  await interaction.editReply(`Bueno, voy a intentar mutear a <@${user?.user?.id}>...`);
  const targetUser = await interaction.guild?.members.fetch({
    user: user?.user?.id || '',
    force: true,
  });
  if (targetUser?.user.bot) {
    await wait(1000);
    await interaction.editReply(`No me hagas perder el tiempo, no puedo mutear a <@${user?.user?.id}> ${EMO_EM_KERMIT}`);
    return;
  }
  await targetUser?.timeout(
    (Number(timeout?.value) || 0) * 60 * 1000,
    reason?.value?.toString(),
  );
  await wait(1000);
  await interaction.editReply(`Ya he muteado a <@${user?.user?.id}> por ${timeout?.value} minutos\nRazón: **${reason?.value}**\n\n${EMO_EM_KERMIT} en serio, dame una mosca... :fly:`);
}
export async function handleRemoveTimeout(interaction: Discord.Interaction<Discord.CacheType>): Promise<void> {
  if (!interaction.isCommand()) return;
  const user = interaction.options.get('usuario');
  await interaction.editReply("Mejor deberías darme un mosca... :fly:");
  await wait(1000);
  await interaction.editReply(`Bueno, voy a intentar desmutear a <@${user?.user?.id}>...`);
  const targetUser = await interaction.guild?.members.fetch({
    user: user?.user?.id || '',
    force: true,
  });
  if (!targetUser?.communicationDisabledUntilTimestamp) {
    await wait(1000);
    await interaction.reply(`No me hagas perder el tiempo, parece que <@${user?.user?.id}> no está muteado ${EMO_EM_KERMIT}`);
  } else {
    await wait(1000);
    await targetUser?.timeout(null);
    await interaction.editReply(`Ya he desmuteado a <@${user?.user?.id}>\n\n${EMO_DRINKTEA} ¿ya me das una mosca?`);
  }
}
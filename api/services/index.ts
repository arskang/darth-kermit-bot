import * as Discord from 'discord.js';
import { REGEX_PREFIX, handleMessageError, wait } from '../helpers';
import { handleBan, handleRemoveTimeout, handleTimeout } from './moderation';
import { handleKermitHi } from './actions';
import { handleOtherMessages, handlePing } from './messages';
import slashes from '../discord/slashes';
import { EMO_LUXIPOUT } from '../helpers/emoji';

export async function handleReady(readyClient: Discord.Client<boolean>, client: Discord.Client<boolean>): Promise<void> {
  if (!readyClient.user) return;
  console.log(`|| ${readyClient.user.tag} || ¡El anfibio está activo! `);
  client.guilds.cache.forEach((guild) => {
    slashes(readyClient?.user?.id || '', guild.id);
  });
}

export async function handleMessageCreate(message: Discord.Message<boolean>, client: Discord.Client<boolean>): Promise<void> {
	if (message.author.bot) return;
  try {
    if (REGEX_PREFIX.test(message.content)) {
      switch (message.content.replace(REGEX_PREFIX, '').toLowerCase().trim()) {
        case 'ping': {
          await handlePing(message, client);
          break;
        }
      }
    } else {
      await handleOtherMessages(message, client);
    }
  } catch(err: Discord.DiscordAPIError | any) {
    await message.reply(handleMessageError(err));
  }
}

// export function handleMessageDelete(message: Discord.Message<boolean> | Discord.PartialMessage): Discord.Awaitable<void> {
// 	console.log({ message });
// }

export async function handleInteractionCreate(interaction: Discord.Interaction<Discord.CacheType>, client: Discord.Client<boolean>): Promise<void>{
  if (!interaction.isCommand()) return;
  await interaction.deferReply();
  await wait(2000);
  try {
    switch (interaction.commandName) {
      case 'hi': {
        await handleKermitHi(interaction);
        break;
      }
      case 'ban': {
        await handleBan(interaction);
        break;
      }
      case 'timeout': {
        await handleTimeout(interaction);
        break;
      }
      case 'remove-timeout': {
        await handleRemoveTimeout(interaction);
        break;
      }
      default: {
        await interaction.editReply(
          `No sé qué hacer con el comando **${interaction.commandName}** ${EMO_LUXIPOUT}`,
        );
      }
    }
  } catch(err: Discord.DiscordAPIError | any) {
    await interaction.editReply(handleMessageError(err)); 
  }
}
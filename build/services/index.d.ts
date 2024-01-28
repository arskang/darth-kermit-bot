import * as Discord from 'discord.js';
export declare function handleMessageCreate(message: Discord.Message<boolean>): Discord.Awaitable<void>;
export declare function handleMessageDelete(message: Discord.Message<boolean> | Discord.PartialMessage): Discord.Awaitable<void>;
export declare function handleInteractionCreate(interaction: Discord.Interaction<Discord.CacheType>): Promise<void>;

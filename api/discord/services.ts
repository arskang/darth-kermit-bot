import * as Discord from 'discord.js';
import client from './client';
import slashes from './slashes';
import {
  handleMessageCreate,
  // handleMessageDelete,
  handleInteractionCreate,
  handleReady,
} from '../services';

client.once(Discord.Events.ClientReady, (readyClient) => {
	handleReady(readyClient, client);
});

client.on(Discord.Events.MessageCreate, (message) => {
  return handleMessageCreate(message, client)
});

// client.on(Discord.Events.MessageDelete, handleMessageDelete);

client.on(Discord.Events.InteractionCreate, (interaction) => {
  return handleInteractionCreate(interaction, client);
});

export default client;
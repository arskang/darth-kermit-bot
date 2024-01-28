import * as Discord from 'discord.js';

const hi = new Discord.SlashCommandBuilder()
  .setName('hi')
  .setDescription('Saludo oficial');

const ban = new Discord.SlashCommandBuilder()
  .setName('ban')
  .setDescription('Banea a un usuario')
  .addUserOption(
    (option) => option
      .setName('usuario')
      .setDescription('Usuario a banear')
      .setRequired(true)
  )
  .addStringOption(
    (option) => option
      .setName('razón')
      .setDescription('Razón del baneo')
      .setRequired(true)
  )
 .setDefaultMemberPermissions(Discord.PermissionFlagsBits.BanMembers);

const timeout = new Discord.SlashCommandBuilder()
  .setName('timeout')
  .setDescription('Muteo temporal de un usuario')
  .addUserOption(
    (option) => option
      .setName('usuario')
      .setDescription('Usuario a mutear temporalmente')
      .setRequired(true)
  )
  .addStringOption(
    (option) => option
      .setName('razón')
      .setDescription('Razón del muteo temporal')
      .setRequired(true)
  )
  .addNumberOption(
    (option) => option
      .setName('tiempo')
      .setDescription('Tiempo en minutos')
      .setRequired(true)
  )
  .setDefaultMemberPermissions(Discord.PermissionFlagsBits.MuteMembers);

const removeTimeout = new Discord.SlashCommandBuilder()
  .setName('remove-timeout')
  .setDescription('Desmutea a un usuario')
  .addUserOption(
    (option) => option
      .setName('usuario')
      .setDescription('Usuario a desmutear')
      .setRequired(true)
  )
  .setDefaultMemberPermissions(Discord.PermissionFlagsBits.MuteMembers);

export default async (botID: string, serverID: string) => {
  const rest = new Discord.REST().setToken(process.env.BOT_TOKEN || '');
  try {
    await rest.put(
      Discord.Routes.applicationGuildCommands(botID, serverID),
      {
        body: [
          hi.toJSON(),
          ban.toJSON(),
          timeout.toJSON(),
          removeTimeout.toJSON(),
        ],
      },
    );
  } catch (error) {
    console.error(error);
  }
}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const hi = new Discord.SlashCommandBuilder()
    .setName('hi')
    .setDescription('Saludo oficial');
const ban = new Discord.SlashCommandBuilder()
    .setName('ban')
    .setDescription('Banea a un usuario')
    .addUserOption((option) => option
    .setName('usuario')
    .setDescription('Usuario a banear')
    .setRequired(true))
    .addStringOption((option) => option
    .setName('razón')
    .setDescription('Razón del baneo')
    .setRequired(true))
    .setDefaultMemberPermissions(Discord.PermissionFlagsBits.BanMembers);
const timeout = new Discord.SlashCommandBuilder()
    .setName('timeout')
    .setDescription('Retiro temporal de un usuario')
    .addUserOption((option) => option
    .setName('usuario')
    .setDescription('Usuario a retirar temporalmente')
    .setRequired(true))
    .addStringOption((option) => option
    .setName('razón')
    .setDescription('Razón del retiro temporal')
    .setRequired(true))
    .addNumberOption((option) => option
    .setName('tiempo')
    .setDescription('Tiempo en minutos')
    .setRequired(true))
    .setDefaultMemberPermissions(Discord.PermissionFlagsBits.MuteMembers);
exports.default = (botID, serverID) => __awaiter(void 0, void 0, void 0, function* () {
    const rest = new Discord.REST().setToken(process.env.BOT_TOKEN || '');
    try {
        yield rest.put(Discord.Routes.applicationGuildCommands(botID, serverID), {
            body: [
                hi.toJSON(),
                ban.toJSON(),
                timeout.toJSON(),
            ],
        });
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=slashes.js.map
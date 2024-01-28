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
exports.handleInteractionCreate = exports.handleMessageDelete = exports.handleMessageCreate = void 0;
const helpers_1 = require("../helpers");
const emoji_1 = require("../helpers/emoji");
function handleMessageCreate(message) {
    if (message.author.bot)
        return;
    console.log({ message });
    if (helpers_1.REGEX_PREFIX.test(message.content)) {
        switch (message.content.replace(helpers_1.REGEX_PREFIX, '').toLowerCase().trim()) {
            case 'ping':
                message.reply('Pong!');
                break;
            case 'lol':
                message.reply('¿Qué es lo que te causa tanta gracia?');
                break;
            default:
                break;
        }
    }
}
exports.handleMessageCreate = handleMessageCreate;
function handleMessageDelete(message) {
    console.log({ message });
}
exports.handleMessageDelete = handleMessageDelete;
function handleInteractionCreate(interaction) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return __awaiter(this, void 0, void 0, function* () {
        if (!interaction.isCommand())
            return;
        console.log({ interaction });
        const user = interaction.options.get('usuario');
        const reason = interaction.options.get('razón');
        const timeout = interaction.options.get('tiempo');
        switch (interaction.commandName) {
            case 'hi':
                interaction.reply(emoji_1.EM_DARTH_KERMIT);
                break;
            case 'ban':
                try {
                    interaction.reply(`Baneando a <@${(_a = user === null || user === void 0 ? void 0 : user.user) === null || _a === void 0 ? void 0 : _a.id}>...\nRazón: **${reason === null || reason === void 0 ? void 0 : reason.value}** ${emoji_1.EM_AKKO_SHRUG}`);
                    const resp = yield ((_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.members.ban(((_c = user === null || user === void 0 ? void 0 : user.user) === null || _c === void 0 ? void 0 : _c.id) || ''));
                    console.log({ resp });
                    // interaction.editReply(`Baneado a <@${user?.user?.id}>\nRazón: **${reason?.value}** ${EM_AKKO_SHRUG}`);   
                }
                catch (err) {
                    interaction.editReply(`No fue posible banear a <@${(_d = user === null || user === void 0 ? void 0 : user.user) === null || _d === void 0 ? void 0 : _d.id}>\nRazón: **${((_e = err === null || err === void 0 ? void 0 : err.rawError) === null || _e === void 0 ? void 0 : _e.message) || ''}**`);
                }
                break;
            case 'timeout':
                try {
                    interaction.reply(`Retirando temporalmente por ${timeout === null || timeout === void 0 ? void 0 : timeout.value} minutos a <@${(_f = user === null || user === void 0 ? void 0 : user.user) === null || _f === void 0 ? void 0 : _f.id}>...\nRazón: **${reason === null || reason === void 0 ? void 0 : reason.value}** ${emoji_1.EM_AKKO_SHRUG}`);
                    interaction.editReply(`Retiro temporal de ${timeout === null || timeout === void 0 ? void 0 : timeout.value} minutos -> <@${(_g = user === null || user === void 0 ? void 0 : user.user) === null || _g === void 0 ? void 0 : _g.id}>\nRazón: **${reason === null || reason === void 0 ? void 0 : reason.value}** ${emoji_1.EM_AKKO_SHRUG}`);
                }
                catch (err) {
                    interaction.editReply(`No fue posible banear a <@${(_h = user === null || user === void 0 ? void 0 : user.user) === null || _h === void 0 ? void 0 : _h.id}>\nRazón: **${((_j = err === null || err === void 0 ? void 0 : err.rawError) === null || _j === void 0 ? void 0 : _j.message) || ''}**`);
                }
                break;
            default:
                break;
        }
    });
}
exports.handleInteractionCreate = handleInteractionCreate;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
exports.default = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
    ],
});
//# sourceMappingURL=client.js.map
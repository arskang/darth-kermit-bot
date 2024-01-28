"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const client_1 = require("./client");
const slashes_1 = require("./slashes");
const services_1 = require("../services");
client_1.default.once(Discord.Events.ClientReady, (readyClient) => {
    console.log(`¡Estoy listo! mi usuario es ${readyClient.user.tag}`);
    client_1.default.guilds.cache.forEach((guild) => {
        (0, slashes_1.default)(readyClient.user.id, guild.id);
    });
});
client_1.default.on(Discord.Events.MessageCreate, services_1.handleMessageCreate);
client_1.default.on(Discord.Events.MessageDelete, services_1.handleMessageDelete);
client_1.default.on(Discord.Events.InteractionCreate, services_1.handleInteractionCreate);
exports.default = client_1.default;
//# sourceMappingURL=services.js.map
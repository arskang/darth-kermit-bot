"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const discord_1 = require("./discord");
dotenv.config();
discord_1.default.login(process.env.BOT_TOKEN);
//# sourceMappingURL=index.js.map
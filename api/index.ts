import * as dotenv from 'dotenv';
import client from './discord';

dotenv.config();
client.login(process.env.BOT_TOKEN);

import { EMO_ANYASAD } from "./emoji";

export const BOT_PREFIX = '!!';

export const REGEX_PREFIX = /^!!/;

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function handleMessageError(error: any) {
  return `
Algo ocurrió, quizá no he comido suficientes moscas... ${EMO_ANYASAD}\n
\`\`\`json
${JSON.stringify(error, null, 2)}
\`\`\`
`;
}
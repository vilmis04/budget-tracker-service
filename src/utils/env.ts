import { loadSync } from "jsr:@std/dotenv";

export const getEnvVariable = (key: string, defaultValue = ""): string => {
    return Deno.env.get(key) || loadSync()[key] || defaultValue;
};

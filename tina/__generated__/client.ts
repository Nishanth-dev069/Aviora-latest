import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: 'C:/Users/HP/Desktop/Aviora-latest/tina/__generated__/.cache/1776172873261', url: 'http://localhost:4001/graphql', token: '1508c8f97cc42b3d6c9e9a49014a0ff41d835928', queries,  });
export default client;
  
import generateMarvelAPIhash from "./generateMarvelAPIhash";

const PUBLIC_KEY = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const TIMESTAMP = import.meta.env.VITE_MARVEL_API_TIMESTAMP;

export const hash = generateMarvelAPIhash(TIMESTAMP, PRIVATE_KEY, PUBLIC_KEY);

export const authParamsQuery = `apikey=${PUBLIC_KEY}&hash=${hash}&ts=${TIMESTAMP}`;

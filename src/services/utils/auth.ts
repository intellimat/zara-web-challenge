import generateMarvelAPIhash from "./generateMarvelAPIhash";

export const PUBLIC_KEY = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
export const PRIVATE_KEY = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
export const TIMESTAMP = import.meta.env.VITE_MARVEL_API_TIMESTAMP;

export const hash = generateMarvelAPIhash(TIMESTAMP, PRIVATE_KEY, PUBLIC_KEY);

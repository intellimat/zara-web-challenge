export const API_BASE_URL = import.meta.env.VITE_MARVEL_API_BASE_URL;

export const ENDPOINTS = {
  CHARACTERS: "/characters",
  CHARACTER_COMICS: (characterId: number) => `/${characterId}/comics`,
};

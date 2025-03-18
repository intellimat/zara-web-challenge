import { CharacterComic } from "../types/CharacterComic";

export default function sortCharacterComics(characterComics: CharacterComic[]) {
  return characterComics.sort((prevComic, nextComic) => {
    const prevComicOnSaleDateMillis = new Date(
      prevComic.dates[0].date
    ).getTime();
    const nextComicOnSaleDateMillis = new Date(
      nextComic.dates[0].date
    ).getTime();
    return prevComicOnSaleDateMillis - nextComicOnSaleDateMillis;
  });
}

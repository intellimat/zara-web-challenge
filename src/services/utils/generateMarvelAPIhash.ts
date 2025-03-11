import { md5 } from "js-md5";

function generateMarvelAPIhash(
  timestamp: string,
  privateKey: string,
  publicKey: string
): string {
  const hash = md5(timestamp + privateKey + publicKey);
  return hash;
}

export default generateMarvelAPIhash;

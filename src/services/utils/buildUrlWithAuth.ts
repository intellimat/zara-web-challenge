import { hash, PUBLIC_KEY, TIMESTAMP } from "./auth";

export default function buildUrlWithAuth(url: URL) {
  url.searchParams.append("apikey", PUBLIC_KEY);
  url.searchParams.append("hash", hash);
  url.searchParams.append("ts", TIMESTAMP);

  return url;
}

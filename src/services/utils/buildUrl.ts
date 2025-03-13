export default function buildUrl(url: URL, URLSearchParams: URLSearchParams) {
  for (const [key, value] of URLSearchParams.entries()) {
    url.searchParams.append(key, value);
  }

  return url;
}

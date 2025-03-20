import { QueryClient } from "@tanstack/react-query";

export default function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}

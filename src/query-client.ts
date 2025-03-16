import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // millis * seconds * minutes * hours
      gcTime: 1000 * 60 * 60 * 24, // millis * seconds * minutes * hours
      retry: false,
    },
  },
});

export const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { localStoragePersister, queryClient } from "./query-client.ts";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: localStoragePersister }}
      >
        <App />
      </PersistQueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);

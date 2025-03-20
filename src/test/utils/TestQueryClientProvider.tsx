import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import createTestQueryClient from "./createTestQueryClient";

const TestQueryClientProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <QueryClientProvider client={createTestQueryClient()}>
    {children}
  </QueryClientProvider>
);

export default TestQueryClientProvider;

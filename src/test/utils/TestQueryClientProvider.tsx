import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const testQueryClient = new QueryClient();

const TestQueryClientProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
);

export default TestQueryClientProvider;

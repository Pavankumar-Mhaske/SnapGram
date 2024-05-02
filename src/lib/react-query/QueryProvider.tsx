import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();
export const QueryProvider = () => {
  return (
    <QueryClientProvider client={queryClient}></QueryClientProvider>
  );
};

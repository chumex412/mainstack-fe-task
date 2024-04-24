"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavBar } from "../ui";
import { TransactionProvider } from "@/context/Transaction";
import { NotifyContainer } from "../lib";

const AppContainer = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NotifyContainer />
      <NavBar />
      <TransactionProvider>{children}</TransactionProvider>
    </QueryClientProvider>
  );
};

export default AppContainer;

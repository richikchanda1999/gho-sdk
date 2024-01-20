import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { WagmiProvider, WagmiProviderProps } from 'wagmi';

export type GhoProviderProps = WagmiProviderProps;

const queryClient = new QueryClient();

export function GhoProvider({
  children,
  config,
}: PropsWithChildren<GhoProviderProps>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

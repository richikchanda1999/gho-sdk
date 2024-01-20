"use client";

import React, { PropsWithChildren } from "react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { sepolia, mainnet } from "viem/chains";
import { injected } from "wagmi/connectors";
import { GhoProvider } from "@repo/gho-sdk";

const config = createConfig({
  chains: [mainnet, sepolia],
  multiInjectedProviderDiscovery: true,
  transports: {
    [mainnet.id]: http(
      `https://mainnet.infura.io/v3/${process.env.INFURA_KEY!}`
    ),
    [sepolia.id]: http(
      `https://sepolia.infura.io/v3/${process.env.INFURA_KEY!}`
    ),
  },
  connectors: [injected()],
});

export default function MyGhoProvider(props: PropsWithChildren) {
  return <GhoProvider config={config}>{props.children}</GhoProvider>;
}

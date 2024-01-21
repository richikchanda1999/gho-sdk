"use client";

import { useAccount, useChainId } from "wagmi";
import React from "react";
import { useGHOBalance } from "@repo/gho-sdk";
import { CHAIN_IDs } from "@repo/gho-sdk/src/utils/types";
import { formatEther } from "viem";

export default function Home() {
  const { address, isConnected } = useAccount();
  const chain = useChainId();

  const { data } = useGHOBalance({ address, chainId: chain as CHAIN_IDs });

  return (
    <div className="flex flex-col gap-4">
      <h1>Connected: {isConnected}</h1>
      <h1>Address: {address}</h1>
      <h1>Chain: {chain}</h1>
      {data !== undefined && (
        <h1>Balance: {formatEther(data as bigint)} GHO</h1>
      )}
    </div>
  );
}

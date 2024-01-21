'use client'
/* global BigInt */
import { useAccount, useChainId } from 'wagmi'
import React, { useEffect } from "react";
import { useGHOBalance, useGHOTotalSupply } from '@repo/gho-sdk';

export default function Home() {
  const { address, isConnected } = useAccount()
  const chain = useChainId()

  const result = useGHOBalance()
  const ghoTokenTotalSupply = useGHOTotalSupply()

  useEffect(() => {
    console.log({result})
  }, [result,ghoTokenTotalSupply])

  return (
    <div className='flex flex-col gap-4'>
      <h1>Connected: {isConnected}</h1>
      <h1>Address: {address}</h1>
      <h1>Chain: {chain}</h1>
      <h1>Balance: {result}</h1>
      <h1>GHO Total Supply: {ghoTokenTotalSupply}</h1>
    </div>
  );
}
'use client'

import { useAccount, useChainId } from 'wagmi'
import React, { useEffect } from "react";
import { useGHOBalance } from '@repo/gho-sdk';

export default function Home() {
  const { address, isConnected } = useAccount()
  const chain = useChainId()

  const result = useGHOBalance()

  useEffect(() => {
    console.log({result})
  }, [result])

  return (
    <div className='flex flex-col gap-4'>
      <h1>Connected: {isConnected}</h1>
      <h1>Address: {address}</h1>
      <h1>Chain: {chain}</h1>
      {/* <h1>Balance: {value}</h1> */}
    </div>
  );
}
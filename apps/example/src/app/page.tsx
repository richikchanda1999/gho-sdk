'use client'
/* global BigInt */
import { useAccount, useChainId } from 'wagmi'
import React, { useEffect } from "react";
import { useGHOBalance, useGHOTotalSupply, useGHOTransfer} from '@repo/gho-sdk';

export default function Home() {
  const { address, isConnected } = useAccount()
  const chain = useChainId()

  const result = useGHOBalance()
  const ghoTokenTotalSupply = useGHOTotalSupply()

  useEffect(() => {
    console.log({result})
  }, [result,ghoTokenTotalSupply])

  const transferGHO = useGHOTransfer();
  const clickTransfer = ()=>{
    let address =(document.getElementById("address") as HTMLInputElement)!;
    let amount = (document.getElementById("amount") as HTMLInputElement)!;
    transferGHO(address.value as `0x{string}`,BigInt(amount.value));
  }
  return (
    <div className='flex flex-col gap-4'>
      <h1>Connected: {isConnected}</h1>
      <h1>Address: {address}</h1>
      <h1>Chain: {chain}</h1>
      <h1>Balance: {result}</h1>
      <h1>GHO Total Supply: {ghoTokenTotalSupply}</h1>
      <input placeholder="Address" className="border-black border-2" type="text" id="address" name="address"/>
      <input placeholder="Amount" className="border-black border-2" type="number" id="amount" name="amount"/>
      <button className="bg-black font-semibold text-gray-50 max-w-lg" onClick={clickTransfer}>transfer</button>
    </div>
  );
}
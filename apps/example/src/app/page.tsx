'use client'
/* global BigInt */
import { useAccount, useChainId } from 'wagmi'
import React, { useEffect, useState } from "react";
import { useGHOBalance, useGHOTotalSupply, useGHOTransfer,useGHOTransferFrom} from '@repo/gho-sdk';

export default function Home() {
  const { address, isConnected } = useAccount()
  const chain = useChainId()
  const transferGHO  = useGHOTransfer();
  const result = useGHOBalance()
  const ghoTokenTotalSupply = useGHOTotalSupply()
  const transferGHOfrom = useGHOTransferFrom();
  const [to,setTo] = useState<`0x{string}`|null>(null)
  const [amount,setAmount] = useState<BigInt|null>(null);
  useEffect(() => {
    console.log({result})
  }, [result,ghoTokenTotalSupply,transferGHO])

  const clickTransferFrom = ()=>{
    let addressfrom =(document.getElementById("addressfrom") as HTMLInputElement)!;
    let addressto =(document.getElementById("addressto") as HTMLInputElement)!;
    let amount = (document.getElementById("amount1") as HTMLInputElement)!;
    transferGHOfrom(addressfrom.value as `0x{string}`,addressto.value as `0x{string}`,BigInt(amount.value));
  }
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
      <input placeholder="Sender" className="border-black border-2" type="text" id="addressfrom" name="addressfrom"/>
      <input placeholder="Receiver" className="border-black border-2" type="text" id="addressto" name="addressto"/>
      <input placeholder="Amount" className="border-black border-2" type="number" id="amount1" name="amount1"/>
      <button className="bg-black font-semibold text-gray-50 max-w-lg" onClick={clickTransfer}>transfer</button>
    </div>
  );
}
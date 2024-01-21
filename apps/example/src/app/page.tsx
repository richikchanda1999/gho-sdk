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

  const clickTransferFrom = () => {
    let addressfrom = (document.getElementById(
      "addressfrom",
    ) as HTMLInputElement)!;
    let addressto = (document.getElementById("addressto") as HTMLInputElement)!;
    let amount = (document.getElementById("amount1") as HTMLInputElement)!;
    //transferGHOfrom(addressfrom.value as `0x{string}`,addressto.value as `0x{string}`,BigInt(amount.value));
  };
  const clickTransfer = () => {
    let address = (document.getElementById("address") as HTMLInputElement)!;
    let amount = (document.getElementById("amount") as HTMLInputElement)!;
    //transferGHO(address.value as `0x{string}`,BigInt(amount.value));
  };
  const clickAllowance = () => {
    let addressOwner = (document.getElementById(
      "addressowner",
    ) as HTMLInputElement)!;
    let addressSpender = (document.getElementById(
      "addressspender",
    ) as HTMLInputElement)!;
    //setAllowance(getAllowance(addressOwner.value as `0x{string}`,addressSpender.value as `0x{string}`))
  };
  const approveAllowance = () => {};
  return (
    <div className="flex flex-col gap-4">
      <h1>Connected: {isConnected}</h1>
      <h1>Address: {address}</h1>
      <h1>Chain: {chain}</h1>
      {/* <h1>Balance: {result}</h1>
      <h1>GHO Total Supply: {ghoTokenTotalSupply}</h1> */}
      <input
        placeholder="Address"
        className="border-black border-2"
        type="text"
        id="address"
        name="address"
      />
      <input
        placeholder="Amount"
        className="border-black border-2"
        type="number"
        id="amount"
        name="amount"
      />
      <button
        className="bg-black font-semibold text-gray-50 max-w-lg"
        onClick={clickTransfer}
      >
        transfer
      </button>
      <input
        placeholder="Sender"
        className="border-black border-2"
        type="text"
        id="addressfrom"
        name="addressfrom"
      />
      <input
        placeholder="Receiver"
        className="border-black border-2"
        type="text"
        id="addressto"
        name="addressto"
      />
      <input
        placeholder="Amount"
        className="border-black border-2"
        type="number"
        id="amount1"
        name="amount1"
      />
      <button
        className="bg-black font-semibold text-gray-50 max-w-lg"
        onClick={clickTransferFrom}
      >
        transfer from
      </button>

      <input
        placeholder="Sender"
        className="border-black border-2"
        type="text"
        id="addressowner"
        name="addressowner"
      />
      <input
        placeholder="Receiver"
        className="border-black border-2"
        type="text"
        id="addressspender"
        name="addressspender"
      />
      <button
        className="bg-black font-semibold text-gray-50 max-w-lg"
        onClick={clickAllowance}
      >
        Get Allowance
      </button>
      <input
        placeholder="Spender"
        className="border-black border-2"
        type="text"
        id="addressOfSpender"
        name="addressOfSpender"
      />
      <button
        className="bg-black font-semibold text-gray-50 max-w-lg"
        onClick={approveAllowance}
      >
        Approve Expenditure
      </button>
      {/* <h1>Allowance:{allowance}</h1>
      <h1>Facilitator List</h1>
      {facilitatorAddressList != ""
        ? facilitatorAddressList.map((el) => <h1 key={el as string}>{el}</h1>)
        : ""} */}
      {data !== undefined && (
        <h1>Balance: {formatEther(data as bigint)} GHO</h1>
      )}
    </div>
  );
}

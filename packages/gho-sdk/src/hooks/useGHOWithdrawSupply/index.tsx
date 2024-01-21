import {
    UseWriteContractReturnType,
    useChainId,
    useWriteContract,
  } from "wagmi";
  import AavePoolABI from "../../utils/abis/AavePool";
  import addresses from "../../utils/addresses";
  import { useCallback } from "react";
  import { Address } from "viem";
  import { CHAIN_IDs } from "../../utils/types";
  
  export type useGHOWithdrawInput = {
    asset: `0x${string}` | undefined;
    amount: bigint;
    referralCode: bigint;
    chainId: CHAIN_IDs;
    onBehalfof: Address
  };
  export type UseGHOWithdrawOutput = Omit<
    UseWriteContractReturnType,
    "writeContract" | "writeContractAsync"
  > & {
    approve: () => ReturnType<UseWriteContractReturnType["writeContractAsync"]>;
  };
  
  export function useGHOWithdrawSupply({
    asset,
    amount,
    chainId,
    referralCode,
    onBehalfof

  }: useGHOWithdrawInput): UseGHOWithdrawOutput {
    const { writeContract, writeContractAsync, ...props } = useWriteContract();
  
    const chain = useChainId();
  
    const approve = useCallback(async () => {
      const result = await writeContractAsync({
        abi: AavePoolABI,
        address: addresses[chainId ?? chain as number].GhoToken,
        functionName: "withdraw",
        args: [asset, amount, 2, onBehalfof],
      });
  
      return result;
    }, [writeContract, asset, amount,referralCode, onBehalfof]);
  
    return { approve, ...props };
  }
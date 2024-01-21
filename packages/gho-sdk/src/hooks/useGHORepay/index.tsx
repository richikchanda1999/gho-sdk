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
  
  export type useGHORepayInput = {
    asset: `0x${string}` | undefined;
    amount: bigint;
    chainId: CHAIN_IDs;
    onBehalfof: Address
  };
  export type UseGHORepayOutput = Omit<
    UseWriteContractReturnType,
    "writeContract" | "writeContractAsync"
  > & {
    approve: () => ReturnType<UseWriteContractReturnType["writeContractAsync"]>;
  };
  
  export function useGHORepay({
    asset,
    amount,
    chainId,
    onBehalfof

  }: useGHORepayInput): UseGHORepayOutput {
    const { writeContract, writeContractAsync, ...props } = useWriteContract();
  
    const chain = useChainId();
  
    const approve = useCallback(async () => {
      const result = await writeContractAsync({
        abi: AavePoolABI,
        address: addresses[chainId ?? chain as number].GhoToken,
        functionName: "repay",
        args: [asset, amount, 2, onBehalfof],
      });
  
      return result;
    }, [writeContract, asset, amount, onBehalfof]);
  
    return { approve, ...props };
  }
  
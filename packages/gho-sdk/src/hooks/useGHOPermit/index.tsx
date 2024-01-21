import {
  UseWriteContractReturnType,
  useChainId,
  useWriteContract,
} from "wagmi";
import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { useCallback } from "react";
import { CHAIN_IDs } from "../../utils/types";

export type useGHOPermitInput = {
  owner: `0x${string}`;
  spender: `0x${string}`;
  amount: BigInt;
  deadline: BigInt;
  chainId: CHAIN_IDs;
  r: string;
  s: string;
  v: number;
};
export type UseGHOPermitOutput = Omit<
  UseWriteContractReturnType,
  "writeContract" | "writeContractAsync"
> & {
  approve: () => ReturnType<UseWriteContractReturnType["writeContractAsync"]>;
};

export function useGHOPermit({
  owner,
  spender,
  amount,
  deadline,
  r,
  s,
  v,
  chainId,
}: useGHOPermitInput): UseGHOPermitOutput {
  const { writeContract, writeContractAsync, ...props } = useWriteContract();

  const chain = useChainId();

  const approve = useCallback(async () => {
    const result = await writeContractAsync({
      abi: GhoTokenABI,
      address: addresses[chainId ?? chain as number].GhoToken,
      functionName: "permit",
      args: [owner, spender, amount, deadline, v, r, s],
    });

    return result;
  }, [writeContract, spender, amount]);

  return { approve, ...props };
}

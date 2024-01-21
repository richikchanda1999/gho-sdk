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
  owner: `0x${string}` | undefined;
  spender: `0x${string}` | undefined;
  amount: bigint;
  deadline: bigint;
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

export default function useGHOPermit({
  owner,
  spender,
  amount,
  deadline,
  r,
  s,
  v,
  chainId,
}: useGHOPermitInput): UseGHOPermitOutput {
  const { writeContractAsync, ...props } = useWriteContract();

  const chain = useChainId();

  const approve = useCallback(async () => {
    const result = await writeContractAsync({
      abi: GhoTokenABI,
      address: addresses[chainId ?? (chain as number)].GhoToken,
      functionName: "permit",
      args: [owner, spender, amount, deadline, v, r, s],
    });

    return result;
  }, [
    spender,
    amount,
    chainId,
    chain,
    owner,
    deadline,
    r,
    s,
    v,
    writeContractAsync,
  ]);

  return { approve, ...props };
}

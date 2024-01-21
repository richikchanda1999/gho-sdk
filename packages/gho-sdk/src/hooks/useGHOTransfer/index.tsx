import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { useChainId, useWriteContract } from "wagmi";
import { Address } from "viem";
import { useCallback } from "react";
import { CHAIN_IDs } from "../../utils/types/chainId";

export type UseGHOTransferInput = {
  spender: `0x${string}`;
  amount: BigInt;
  chainId: CHAIN_IDs;
};
export function useGHOTransfer({
  spender,
  amount,
  chainId,
}: UseGHOTransferInput) {
  const { writeContractAsync } = useWriteContract();
  const transfer = useCallback(async () => {
    const result = await writeContractAsync({
      abi: GhoTokenABI,
      address: addresses[chainId as number].GhoToken,
      functionName: "transfer",
      args: [spender, amount],
    });
    return result;
  }, [spender, amount]);
  return transfer;
}

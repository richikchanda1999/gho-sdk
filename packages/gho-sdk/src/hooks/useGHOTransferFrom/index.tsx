import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { useWriteContract } from "wagmi";
import { Address } from "viem";
import { useCallback } from "react";
import { CHAIN_IDs } from "../../utils/types/chainId";

export type UseGHOTransferFromInput = {
  sender: Address;
  recipient: Address;
  amount: BigInt;
  chainId: CHAIN_IDs;
};
export function useGHOTransferFrom({
  sender,
  recipient,
  amount,
  chainId,
}: UseGHOTransferFromInput) {
  const { writeContractAsync } = useWriteContract();
  const transfer = useCallback(async () => {
    const result = await writeContractAsync({
      abi: GhoTokenABI,
      address: addresses[chainId as number].GhoToken,
      functionName: "transfer",
      args: [sender, recipient, amount],
    });
    return result;
  }, [sender, recipient, amount]);
  return transfer;
}

import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { UseReadContractReturnType, useReadContract } from "wagmi";
import { Address } from "viem";
import { CHAIN_IDs } from "../../utils/types/chainId";
import { useCallback } from "react";
export type UseAllowanceInput = {
  owner: Address;
  spender: Address;
  chainId: CHAIN_IDs;
};
export function useGHOAllowance({
  owner,
  spender,
  chainId,
}: UseAllowanceInput) {
  const transferAllowance = useCallback(() => {
    const result: UseReadContractReturnType = useReadContract({
      abi: GhoTokenABI,
      address: addresses[chainId as number].GhoToken,
      functionName: "allowance",
      args: [owner, spender],
    });
    return result.data !== undefined
      ? BigInt(result.data as number).toString()
      : "";
  }, [owner, spender]);

  return transferAllowance;
}

import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { UseReadContractReturnType, useReadContract } from "wagmi";
import { CHAIN_IDs } from "../../utils/types/chainId";
import { Address } from "viem";
import { useCallback } from "react";
export type UseGhoTotalSupplyInput = { chainId: CHAIN_IDs };
export function useGHOTotalSupply({ chainId }: UseGhoTotalSupplyInput) {
  const result: UseReadContractReturnType = useReadContract({
    abi: GhoTokenABI,
    address: addresses[chainId as number].GhoToken,
    functionName: "totalSupply",
    chainId: chainId,
  });
  return result.data !== undefined
    ? BigInt(result.data as number).toString()
    : "";
}
export type UseGHONoncesInput = { address: Address; chainId: CHAIN_IDs };
export function useGHONonce({ address, chainId }: UseGHONoncesInput) {
  const nonceMethod = useCallback(() => {
    const result: UseReadContractReturnType = useReadContract({
      abi: GhoTokenABI,
      address: addresses[chainId as number].GhoToken,
      functionName: "getFacilitatorBucket",
      args: [address],
    });

    return result;
  }, [address]);
  return nonceMethod;
}

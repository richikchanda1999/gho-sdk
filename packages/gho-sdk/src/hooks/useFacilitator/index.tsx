import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { UseReadContractReturnType, useChainId, useReadContract } from "wagmi";
import { Address } from "viem";
import { CHAIN_IDs } from "../../utils/types/chainId";
import { useCallback } from "react";

export type UseFacilitatorAddressListInput = { chainId: CHAIN_IDs };
export function useFacilitatorAddressList({
  chainId,
}: UseFacilitatorAddressListInput) {
  const result: UseReadContractReturnType = useReadContract({
    abi: GhoTokenABI,
    address: addresses[chainId as number].GhoToken,
    functionName: "getFacilitatorsList",
    chainId: chainId,
  });
  return result.data !== undefined ? (result.data as Array<Address>) : "";
}

export type UseFacilitatorInput = { facilitator: Address; chainId: CHAIN_IDs };
export function useFacilitator({ facilitator, chainId }: UseFacilitatorInput) {
  const facilitatorMethod = useCallback(() => {
    const result: UseReadContractReturnType = useReadContract({
      abi: GhoTokenABI,
      address: addresses[chainId as number].GhoToken,
      functionName: "getFacilitator",
      args: [facilitator],
    });
    return result;
  }, [facilitator]);
  return facilitatorMethod;
}

export type UseFacilitatorBucketInput = {
  facilitator: Address;
  chainId: CHAIN_IDs;
};
export function useFacilitatorBucket({
  facilitator,
  chainId,
}: UseFacilitatorBucketInput) {
  const facilitatorMethod = useCallback(() => {
    const result: UseReadContractReturnType = useReadContract({
      abi: GhoTokenABI,
      address: addresses[chainId as number].GhoToken,
      functionName: "getFacilitatorBucket",
      args: [facilitator],
    });

    return result;
  }, [facilitator]);
  return facilitatorMethod;
}

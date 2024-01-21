import { useChainId, useReadContract } from "wagmi";
import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { CHAIN_IDs } from "../../utils/types";

export type UseGHOBalanceInput = {
  address: `0x${string}` | undefined;
  chainId?: CHAIN_IDs;
};
export type UseGHOBalanceOutput = ReturnType<typeof useReadContract>;

export function useGHOBalance({
  address,
  chainId,
}: UseGHOBalanceInput): UseGHOBalanceOutput {
  const chain = useChainId();

  const result = useReadContract({
    abi: GhoTokenABI,
    address: addresses[chainId ?? (chain as number)].GhoToken,
    functionName: "balanceOf",
    args: [address],
  });

  return result;
}

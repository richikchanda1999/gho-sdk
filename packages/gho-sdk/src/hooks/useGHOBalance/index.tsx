import { useAccount, useChainId, useReadContract } from "wagmi";
import GhoTokenABI from "../../utils/abis/GhoToken";
import addresses from "../../utils/addresses";
import { CHAIN_IDs } from "../../utils/types";
import { ReadContractReturnType } from "viem";

export type UseGHOBalanceInput = {
  address: `0x${string}`;
  chainId?: CHAIN_IDs;
};
export type UseGHOBalanceOutput = ReadContractReturnType;

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

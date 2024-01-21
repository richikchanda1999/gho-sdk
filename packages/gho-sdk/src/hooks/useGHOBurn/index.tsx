import { useChainId, useWriteContract } from "wagmi";
import addresses from "../../utils/addresses";
import { CHAIN_IDs } from "../../utils/types";
import { useCallback } from "react";
import GhoToken from "../../utils/abis/GhoToken";

export type useGHOBurnInput = {
  account: `0x${string}`;
  amount: bigint;
  chainId?: CHAIN_IDs;
};
export type UseGHOBurnOutput = Omit<
  ReturnType<typeof useWriteContract>,
  "writeContract" | "writeContractAsync"
> & {
  burnGHO: () => ReturnType<
    ReturnType<typeof useWriteContract>["writeContractAsync"]
  >;
};

export function useGHOBurn({ amount, chainId }: useGHOBurnInput) {
  const { writeContractAsync, ...props } = useWriteContract();

  const chain = useChainId();

  const burnGHO = useCallback(async () => {
    const result = await writeContractAsync({
      abi: GhoToken,
      address: addresses[chainId ?? (chain as number)].GhoToken,
      functionName: "burn",
      args: [amount],
    });

    return result;
  }, [writeContractAsync, amount]);

  return { burnGHO, ...props };
}

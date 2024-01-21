import { useChainId, useWriteContract } from "wagmi";
import addresses from "../../utils/addresses";
import { CHAIN_IDs } from "../../utils/types";
import { useCallback } from "react";
import GhoToken from "../../utils/abis/GhoToken";

export type useGHOMintInput = {
  account: `0x${string}`;
  amount: bigint;
  chainId?: CHAIN_IDs;
};
export type UseGHOMintOutput = Omit<
  ReturnType<typeof useWriteContract>,
  "writeContract" | "writeContractAsync"
> & {
  mintGHO: () => ReturnType<
    ReturnType<typeof useWriteContract>["writeContractAsync"]
  >;
};

export default function useGHOMint({account, amount, chainId}: useGHOMintInput) {
  const { writeContractAsync, ...props } = useWriteContract();

  const chain = useChainId();

  const mintGHO = useCallback(async () => {
    const result = await writeContractAsync({
      abi: GhoToken,
      address: addresses[chainId ?? (chain as number)].GhoToken,
      functionName: "mint",
      args: [account, amount],
    });

    return result;
  }, [writeContractAsync, account, amount]);

  return { mintGHO, ...props };
}

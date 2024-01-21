import { useChainId, useWriteContract } from "wagmi";
import AavePool from "../../utils/abis/AavePool";
import addresses from "../../utils/addresses";
import { CHAIN_IDs } from "../../utils/types";
import { useCallback } from "react";

export type UseSupplyCollateralInput = {
  asset: "eth" | `0x${string}`;
  amount: bigint;
  referralCode: bigint;
  onBehalfOf: `0x${string}`;
  chainId?: CHAIN_IDs;
};
export type UseSupplyCollateralOutput = Omit<
  ReturnType<typeof useWriteContract>,
  "writeContract" | "writeContractAsync"
> & {
  supplyCollateral: () => ReturnType<
    ReturnType<typeof useWriteContract>["writeContractAsync"]
  >;
};

export default function useSupplyCollateral(inputs: UseSupplyCollateralInput) {
  const { asset, referralCode, onBehalfOf, chainId } = inputs;
  const { writeContractAsync, ...props } = useWriteContract();

  const chain = useChainId();

  const supplyCollateral = useCallback(async () => {
    const result = await writeContractAsync({
      abi: AavePool,
      address: asset === 'eth' ? addresses[chainId ?? (chain as number)].WrappedTokenGateway : addresses[chainId ?? (chain as number)].AavePool,
      functionName: asset === "eth" ? "depositETH" : "supply",
      args:
        asset === "eth"
          ? [
              addresses[chainId ?? (chain as number)].AavePool,
              onBehalfOf,
              referralCode,
            ]
          : [asset, inputs.amount, onBehalfOf, referralCode],
      value: asset === "eth" ? inputs.amount : undefined,
    });

    return result;
  }, [writeContractAsync, asset, referralCode, onBehalfOf, chainId, chain]);

  return { supplyCollateral, ...props };
}

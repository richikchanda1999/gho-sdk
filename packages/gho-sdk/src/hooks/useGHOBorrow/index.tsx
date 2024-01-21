import { useChainId, useWriteContract } from "wagmi";
import AavePool from "../../utils/abis/AavePool";
import addresses from "../../utils/addresses";
import { CHAIN_IDs } from "../../utils/types";
import { useCallback } from "react";

export type UseGHOBorrowInput = {
  amount: bigint;
  interestRateMode: bigint;
  referralCode: bigint;
  onBehalfOf: `0x${string}`;
  chainId?: CHAIN_IDs;
};
export type UseGHOBorrowOutput = Omit<ReturnType<typeof useWriteContract>, 'writeContract' | 'writeContractAsync'> & { approveGHO: () => ReturnType<ReturnType<typeof useWriteContract>['writeContractAsync']> }

export default function useGHOBorrow({
  amount,
  interestRateMode,
  referralCode,
  onBehalfOf,
  chainId,
}: UseGHOBorrowInput) {
  const { writeContractAsync, ...props } = useWriteContract();

  const chain = useChainId();

  const borrowGHO = useCallback(async () => {
    const result = await writeContractAsync({
      abi: AavePool,
      address: addresses[chainId ?? (chain as number)].AavePool,
      functionName: "borrow",
      args: [
        addresses[chainId ?? (chain as number)].GhoToken,
        amount,
        interestRateMode,
        referralCode,
        onBehalfOf,
      ],
    });

    return result;
  }, [writeContractAsync, amount, interestRateMode, referralCode, onBehalfOf]);

  return { borrowGHO, ...props };
}

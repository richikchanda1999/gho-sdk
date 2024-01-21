import { UseWriteContractReturnType, useAccount, useChainId, useReadContract, useWriteContract } from 'wagmi';
import GhoTokenABI from '../../utils/abis/GhoToken';
import addresses from '../../utils/addresses';
import { useCallback } from 'react';
import { CHAIN_IDs } from '../../utils/types';

export type UseGHOApproveInput = { spender: `0x${string}`, amount: BigInt, chainId: CHAIN_IDs }
export type UseGHOApproveOutput = Omit<UseWriteContractReturnType, 'writeContract' | 'writeContractAsync'> & { approve: () => ReturnType<UseWriteContractReturnType['writeContractAsync']> }

export function useGHOApprove({ spender, amount, chainId }: UseGHOApproveInput): UseGHOApproveOutput {
  const { writeContract, writeContractAsync, ...props } = useWriteContract()

  const approve = useCallback(async () => {
    const result = await writeContractAsync({
        abi: GhoTokenABI,
        address: addresses[chainId].GhoToken,
        functionName: 'approve',
        args: [spender, amount],
    })

    return result
  }, [writeContract, spender, amount])

  return { approve, ...props }
}

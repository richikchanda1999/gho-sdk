import { UseWriteContractReturnType, useWriteContract } from 'wagmi';
import GhoTokenABI from '../../utils/abis/GhoToken';
import addresses from '../../utils/addresses';
import { useCallback } from 'react';
import { CHAIN_IDs } from '../../utils/types';

export type UseGHOApproveInput = { spender: `0x${string}`, amount: bigint, chainId: CHAIN_IDs }
export type UseGHOApproveOutput = Omit<UseWriteContractReturnType, 'writeContract' | 'writeContractAsync'> & { approveGHO: () => ReturnType<UseWriteContractReturnType['writeContractAsync']> }

export default function useGHOApprove({ spender, amount, chainId }: UseGHOApproveInput): UseGHOApproveOutput {
  const { writeContractAsync, ...props } = useWriteContract()

  const approveGHO = useCallback(async () => {
    const result = await writeContractAsync({
        abi: GhoTokenABI,
        address: addresses[chainId].GhoToken,
        functionName: 'approve',
        args: [spender, amount],
    })

    return result
  }, [writeContractAsync, spender, amount])

  return { approveGHO, ...props }
}

import GhoTokenABI from '../../utils/abis/GhoToken';
import addresses from '../../utils/addresses';
import { UseReadContractReturnType,useChainId, useReadContract } from 'wagmi';

export function useGHOTotalSupply() {
    const chain = useChainId()
    const result: UseReadContractReturnType = useReadContract({
      abi: GhoTokenABI,
      address: addresses[chain as number].GhoToken,
      functionName: 'totalSupply',
      chainId: chain
    })
    return (result.data !== undefined)? BigInt(result.data as number).toString(): ''
  }
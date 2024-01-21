import { UseReadContractReturnType, useAccount, useChainId, useReadContract } from 'wagmi';
import GhoTokenABI from '../utils/abis/GhoToken';
import addresses from '../utils/addresses';


export function useGHOBalance() {
  const { address } = useAccount()
  const chain = useChainId();

  const result:UseReadContractReturnType = useReadContract({
    abi: GhoTokenABI,
    address: addresses[chain as number].GhoToken,
    functionName: 'balanceOf',
    args: [address],
    chainId: chain,
    account: address,
  });
  
  return (result.data !== undefined)? BigInt(result.data as number).toString(): ''
}

export function useGHOTotalSupply() {
  const { address } = useAccount()
  const chain = useChainId()
  const result: UseReadContractReturnType = useReadContract({
    abi: GhoTokenABI,
    address: addresses[chain as number].GhoToken,
    functionName: 'totalSupply',
    chainId: chain
  })
  return (result.data !== undefined)? BigInt(result.data as number).toString(): ''
}
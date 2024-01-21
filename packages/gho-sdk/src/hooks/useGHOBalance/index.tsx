
import GhoTokenABI from '../../utils/abis/GhoToken';
import addresses from '../../utils/addresses';
import { UseReadContractReturnType, useAccount, useChainId, useReadContract } from 'wagmi';

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


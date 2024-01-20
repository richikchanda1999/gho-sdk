import { useAccount, useChainId, useReadContract } from 'wagmi';
import GhoTokenABI from '../utils/abis/GhoToken';
import addresses from '../utils/addresses';

export function useGHOBalance() {
  const { address } = useAccount()
  const chain = useChainId();

  const result = useReadContract({
    abi: GhoTokenABI,
    address: addresses[chain as number].GhoToken,
    functionName: 'balanceOf',
    args: [address],
    chainId: chain,
    account: address,
  });

  return result
}

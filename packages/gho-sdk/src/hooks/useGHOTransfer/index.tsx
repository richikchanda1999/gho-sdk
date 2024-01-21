import GhoTokenABI from '../../utils/abis/GhoToken';
import addresses from '../../utils/addresses';
import { useChainId, useWriteContract } from 'wagmi';
import { Address } from 'viem';

export function useGHOTransfer() {
    
    const chain = useChainId();
    const { writeContract } = useWriteContract()
    const transfer=(to: Address,amount:bigint) => {
    
      writeContract({ 
        abi: GhoTokenABI,
        address: addresses[chain as number].GhoToken,
        functionName: 'transfer',
        args: [
          to,
          amount,
        ],
     });
    }
    return transfer;
  }
import GhoTokenABI from '../../utils/abis/GhoToken';
import addresses from '../../utils/addresses';
import { useChainId, useWriteContract} from 'wagmi';
import { Address } from 'viem';

export function useGHOTransferFrom() {
    const chain = useChainId();
    const { writeContract } = useWriteContract()
    const transferFrom=(from:Address,to: Address,amount:bigint) => {
      writeContract({ 
        abi: GhoTokenABI,
        address: addresses[chain as number].GhoToken,
        functionName: 'transferFrom',
        args: [
          from,
          to,
          amount,
        ],
     });
    }
    return transferFrom;
  }
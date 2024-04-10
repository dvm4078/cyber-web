import { useEffect } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useBalance } from 'wagmi';
import { parseEther } from 'viem'
import toast from 'react-hot-toast';

import ConnectorButton from '../components/ConnectorButton';
import abi from '../configs/abi-mint';

const NFT_PRICE = '0.1';

function MintNftPage() {
  const account = useAccount();
  const { data: balance } = useBalance({ address: account?.address })

  const { data: hash, writeContract, writeContractAsync, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      toast.success('Mint NFT success!')
    }
  }, [isConfirmed])


  const mint = () => {
    if (balance?.formatted < NFT_PRICE) {
      toast.error('Insufficient balance')
      return;
    }
    try {
      writeContractAsync({
        address: import.meta.env.VITE_MINT_CONTRACT_ADDRESS,
        abi,
        functionName: 'safeMintByUser',
        args: [],
        value: parseEther(NFT_PRICE)
      })
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="main">
      <div className="box-mint-nft">
        <picture className="txt-mint">
          <source srcSet="img/txt-mint.png" media="(min-width: 1000px)" />
          <img srcSet="img/txt-mint-mb.png" alt="…" />
        </picture>
        <div className="box-main-nft">
          <img src="img/nft-8.png" />
          <p className="txt-count">1233/3000</p>
          {account?.isConnected ? (
            <a
              onClick={mint}
              className={`btn-mint ${isPending ? 'disable' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Mint NFT
              {(isConfirming && !isConfirmed) && (<span className="loading" />)}
            </a>
          ) : (
            <ConnectorButton />
          )}
        </div>
        <div className="box-list">
          <div className="nft nft-1"></div>
          <div className="nft nft-2"></div>
          <div className="nft nft-3"></div>
          <div className="nft nft-4"></div>
          <div className="nft nft-5"></div>
          <div className="nft nft-6"></div>
          <div className="nft nft-7"></div>
        </div>

      </div>
    </div>
  )
}

export default MintNftPage

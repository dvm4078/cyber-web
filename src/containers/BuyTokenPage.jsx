import { useEffect, useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useBalance } from 'wagmi';
import { parseEther } from 'viem'
import toast from 'react-hot-toast';

import ConnectorButton from '../components/ConnectorButton';
import abi from '../configs/abi';

function BuyTokenPage() {
  const [amount, setAmount] = useState('');
  const account = useAccount()
  const { data: balance } = useBalance({ address: account?.address })
  const { data: hash, writeContract, writeContractAsync, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed, isError } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      toast.success('Buy Token success!')
    }
  }, [isConfirmed])

  const buy = () => {
    if (balance?.formatted < amount) {
      toast.error('Insufficient balance');
      return
    }
    try {
      writeContractAsync({
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        abi,
        functionName: 'buy',
        args: [],
        value: parseEther(amount)
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
        <div className="box-buy">
          <div className="box-inner">
            <div className="rp-top"></div>
            <div className="rp-bot"></div>
            <h3>TOKEN PRESALE IS LIVE</h3>
            <p className="txt-info-buy">Soft cap: 500 sol</p>
            <div className="box-process">
              <div className="box-process-inner" style={{ width: '20%' }}>
                <p className="txt-process" style={{ left: '10%' }}>100/500 SOL</p>
              </div>
            </div>
            <p className="txt-info-buy">MIN BUY: 1 SOLANA, MAX BUY 25 SOL PERWALLET</p>
            <div className="box-buy-inner">
              {account?.isConnected && (
                <form action="">
                  <div className="box-form">
                    <input
                      minLength="1"
                      maxLength="3"
                      type="number"
                      value={amount}
                      name="amount"
                      placeholder="ENTER AMOUNT"
                      onChange={e => setAmount(e.target.value)}
                    />
                    <label htmlFor="fname">ENTER AMOUNT</label>
                  </div>
                </form>
              )}
              {account?.isConnected ? (
                <a
                  onClick={buy}
                  className={`btn-mint ${isPending ? 'disable' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  Buy Now
                  {isConfirming && (<span className="loading" />)}
                </a>
              ) : (
                <ConnectorButton />)}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BuyTokenPage

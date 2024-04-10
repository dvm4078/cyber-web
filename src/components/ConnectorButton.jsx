import { useState, useEffect } from 'react'
import { useConnect, useSwitchChain } from 'wagmi';

function ConnectorButton() {
  const [ready, setReady] = useState(false);
  const { connectors, connect } = useConnect();
  const { chains } = useSwitchChain()


  const connector = connectors[0];

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector, setReady]);

  const connectWallet = () => {
    const targetChainId = import.meta.env.VITE_NODE_ENV === 'development' ? chains[0]?.id : chains[1]?.id;

    connect({
      connector: connectors[0],
      chainId: targetChainId,
    })
  }

  return (
    <a
      disabled={!ready}
      onClick={connectWallet}
      className={`btn-mint ${!ready ? 'disable' : ''}`}
      style={{ cursor: 'pointer' }}
    >
      Connect wallet
    </a>
  );
}

export default ConnectorButton

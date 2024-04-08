// @ts-nocheck
import { createConfig, configureChains, http } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { metaMask } from 'wagmi/connectors'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'


const wagmiConfig = createConfig({
  chains: [bscTestnet, bsc],
  connectors: [
    injected(),
    metaMask(),
    safe(),
  ],
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
})

export { wagmiConfig }
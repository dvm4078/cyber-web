import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import HomePage from './containers/HomePage';
import BuyTokenPage from './containers/BuyTokenPage';
import MarketPage from './containers/MarketPage';
import MintNftPage from './containers/MintNftPage';
import RoadMapPage from './containers/RoadMapPage';
import TokenPage from './containers/TokenPage';

import DefaultLayout from './components/DefaultLayout';
import { wagmiConfig } from '@/configs/connectors';

// import './assets/css/main.css';
// import './assets/css/fullpage.css';

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        {/* <AuthProvider> */}
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <DefaultLayout />,
              children: [
                { path: "", element: <HomePage /> },
                { path: "/buy-token", element: <BuyTokenPage /> },
                { path: "/market", element: <MarketPage /> },
                { path: "/mint", element: <MintNftPage /> },
                { path: "/roadmap", element: <RoadMapPage /> },
                { path: "/tokenomic", element: <TokenPage /> },
              ],
            },
            // {
            //   path: "/*",
            //   element: <NotFoundPage />,
            // },
          ])}
        />
        {/* </AuthProvider> */}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@rainbow-me/rainbowkit/styles.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { goerli } from "wagmi/chains";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { createPublicClient, http } from "viem";

const networks = [goerli]; // add more networks if  needed

const { chains } = configureChains(networks, [
  publicProvider(),
]);
const { connectors } = getDefaultWallets({
  appName: "ColorHueState",
  projectId: "1f111cfa89ffd372a79b7a99e9ab38f2",
  chains,
});


const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: networks[0],
    transport: http(),
  }),
  connectors,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

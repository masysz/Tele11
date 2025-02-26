import React from 'react';
import WebApp from "@twa-dev/sdk";
import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import App from './App';
import "./index.css";

WebApp.ready();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://app.endevity.com/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider> 
  </React.StrictMode>
);
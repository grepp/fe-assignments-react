import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { worker } from './mocks';
import './monaco-worker';

await worker.start();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

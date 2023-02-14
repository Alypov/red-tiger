import React from 'react';
import { createRoot } from 'react-dom/client';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { Router, ReactLocation } from '@tanstack/react-location';
import './index.css';
import App from './App';

const container: HTMLElement | null = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    {/* <ReactQueryDevtools /> */}
  </React.StrictMode>
);

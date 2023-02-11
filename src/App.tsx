import { Link, Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import './App.css';
import { routes } from './routes';

function App() {
  const location = new ReactLocation();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <div className='App'>
          <Outlet />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

import { Link, Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

import './App.css';
import { MainLogo, NavBar, Header, HeaderCurrentUser } from './components';

import { routes } from './routes';
import { ROUTES } from './routes/constants';

function App() {
  const location = new ReactLocation();
  const queryClient = new QueryClient();
  const navBarLinks: ReactNode[] = [<Link to={ROUTES.GOALS}>GOALS</Link>, <Link to={ROUTES.EMPLOYEES}>ALL EMPLOYEES</Link>, <Link to={ROUTES.ACCOUNT}>ACCOUNT</Link>];
  const headerLeftSection = <MainLogo />;
  const headerRightSection = <HeaderCurrentUser />;
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <div className='App'>
          <Header leftSection={headerLeftSection} rightSection={headerRightSection} />
          <NavBar links={navBarLinks} />
          <Outlet />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

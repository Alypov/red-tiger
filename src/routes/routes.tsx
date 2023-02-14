import { Route } from '@tanstack/react-location';
import { AccountPage, CandidatesPage, EmployeesPage } from '../pages';
import { ROUTES } from './constants';
export const routes: Route[] = [
  {
    path: '/',
    element: <CandidatesPage />,
  },
  {
    path: ROUTES.CANDIDATES,
    element: <CandidatesPage />,
  },
  {
    path: ROUTES.EMPLOYEES,
    element: <EmployeesPage />,
  },
  {
    path: ROUTES.ACCOUNT,
    element: <AccountPage />,
  },
];

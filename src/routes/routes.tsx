import { Route } from '@tanstack/react-location';
import { AccountPage, EmployeesPage, GoalsPage, Homepage, RegistrationPage } from '../pages';
import { ROUTES } from './constants';
export const routes: Route[] = [
  {
    path: ROUTES.HOMEPAGE,
    element: <Homepage />,
  },
  {
    path: ROUTES.EMPLOYEES,
    element: <EmployeesPage />,
  },
  {
    path: ROUTES.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: ROUTES.GOALS,
    element: <GoalsPage />,
  },
  {
    path: ROUTES.ACCOUNT,
    element: <AccountPage />,
  },
];

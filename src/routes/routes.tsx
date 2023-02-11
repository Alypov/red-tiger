import { Route } from '@tanstack/react-location';
import { EmployeesPage, Homepage, RegistrationPage } from '../pages';
export const routes: Route[] = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'employees',
    element: <EmployeesPage />,
  },
  {
    path: 'registration',
    element: <RegistrationPage />,
  },
];

import type { JSX } from 'react';
import LoginPage from './pages/login/login.tsx';
import RegisterPage from './pages/register/register.tsx';
import CaptionsPage from './pages/captions/captions.tsx';
import CountriesPage from './pages/countries/countries.tsx';

export const RoutesMap: IRoute[] = [
  {
    path: 'login',
    Component: <LoginPage />,
    noHeader: true,
    centerLayout: true,
  },
  {
    path: 'register',
    Component: <RegisterPage />,
    noHeader: true,
    centerLayout: true,
  },
  {
    path: 'captions',
    Component: <CaptionsPage />,
  },
  {
    path: '/',
    Component: <CaptionsPage />,
  },
  {
    path: 'countries',
    Component: <CountriesPage />,
  },
];

interface IRoute {
  path: string;
  Component: JSX.Element;
  noHeader?: boolean;
  centerLayout?: boolean;
}

import { loginType } from 'api/types';
import { ReactNode } from 'react';

export interface IViewportProviderProps {
  children: React.ReactNode;
}
export type AuthContextType = {
  token: string | null;
  login: (values: loginType) => void;
  logout: () => void;
  setAuth: (token: string, username: string) => void;
  isAuth: boolean;
  user: string | null;
};
export type Props = {
  children: ReactNode;
};

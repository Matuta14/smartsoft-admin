import { loginType } from 'api/types';
import { loginUser } from '../api/requests';
import { createContext, useEffect, useState, type ReactNode } from 'react';
import { AuthContextType, Props } from './types';

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
  setAuth: () => {},
  isAuth: false,
  user: null,
});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const isAuth = Boolean(token || localStorage.getItem('token'));
  const setAuth = (token: string, username: string) => {
    setToken(token);
    setUser(username);
    localStorage.setItem('token', token);
    localStorage.setItem('user', username);
  };

  const login = async (values: loginType) => {
    try {
      const { data } = await loginUser(values);
      setToken(data.token);
      setUser(data.username);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, login, logout, setAuth, isAuth, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

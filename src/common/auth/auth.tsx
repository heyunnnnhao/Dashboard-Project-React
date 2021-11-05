import { useState, createContext, useContext, ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { fakeAuthProvider } from './fakeAuthProvider';
import { getCookie, setCookie } from '../index';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!);

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: { children: ReactNode }) {
  let [user, setUser] = useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setCookie('logIn', newUser, { expires: 7 });
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      setCookie('logIn', null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (getCookie('logIn')) {
    return children;
  }

  if (!auth.user) {
    return <Navigate to='/' />;
  }

  return children;
}

export { RequireAuth, AuthProvider, useAuth };

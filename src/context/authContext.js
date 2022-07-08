import { createContext, useContext } from 'react';

export const AuthContext = createContext(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useState was called outside StateContext.Provider');
  }
  return context;
};

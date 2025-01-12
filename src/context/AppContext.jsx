import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [role, setRole] = useState('');
  const value = {
    role,
    setRole,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };

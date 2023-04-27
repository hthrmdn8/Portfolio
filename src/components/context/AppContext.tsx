import React, { useState, createContext, useContext } from 'react';



type AppContextType = {
  someValue: string;
  setSomeValue: (value: string) => void;
};

const AppContext = createContext<AppContextType>({
  someValue: '',
  setSomeValue: () => {},
});

const useAppContext = () => useContext(AppContext);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [someValue, setSomeValue] = useState('');

  return (
    <AppContext.Provider value={{ someValue, setSomeValue }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
export default AppProvider;
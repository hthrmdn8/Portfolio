import React, { useState, createContext, useContext } from 'react';


//defines a new data type called AppContextType that specifies the shape of the data that will be stored in the context. 
//The AppContextType type has two properties: someValue and setSomeValue.

type AppContextType = {
  someValue: string;
  setSomeValue: (value: string) => void;
};

//creates a new context called AppContext using the createContext 
//function from the react library. The AppContext context 
//is typed as having a value of type AppContextType and is initialized 
//to an object with empty string and empty function as the initial values of someValue and setSomeValue.

const AppContext = createContext<AppContextType>({
  someValue: '',
  setSomeValue: () => { },
});

//creates a custom hook called useAppContext that returns the current value of the AppContext context 
//using the useContext hook from the react library.

const useAppContext = () => useContext(AppContext);

//defines a new component called AppProvider which is a function component that accepts 
//one prop called children. The component is typed to receive only ReactNode as the children prop.

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  //uses the useState hook to declare a new state variable called someValue, 
  //which will hold the value of someValue in the context. 
  //The useState hook returns an array containing the current value of someValue 
  //and a function to update it, setSomeValue. The someValue variable is initialized with an empty string.
  const [someValue, setSomeValue] = useState('');

  //returns a JSX element that renders the AppContext.Provider component and passes a value object
  // with two properties, someValue and setSomeValue, to the provider. 
  //The children prop is also passed as a child of the provider.
  return (
    <AppContext.Provider value={{ someValue, setSomeValue }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
export default AppProvider;
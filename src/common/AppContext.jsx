import React from 'react';

export const AppContext = React.createContext(null);

export const AppProvider = (props) => {
  const { children } = props;
  const amount = 1;

  return <AppContext.Provider value={{ amount }}>{children}</AppContext.Provider>;
};

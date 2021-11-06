import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  const [amount, setAmount] = useState(1);
  const [cityList, setCityList] = useState([]);

  return <AppContext.Provider value={{ amount, setAmount, cityList, setCityList }}>{children}</AppContext.Provider>;
};

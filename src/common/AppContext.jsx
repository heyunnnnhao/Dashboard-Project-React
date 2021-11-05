import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  const [amount, setAmount] = useState(1);

  const withdrawMoney = (value) => {
    setAmount(amount - value);
  };

  const depositMoney = (value) => {
    setAmount(amount + value);
  };

  return <AppContext.Provider value={{ amount, depositMoney, withdrawMoney }}>{children}</AppContext.Provider>;
};

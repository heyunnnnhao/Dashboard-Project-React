import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext(null);

export const AppProvider = (props) => {
  const { children } = props;
  const [amount, setAmount] = useState(1);

  const withdrawMoney = () => {
    setAmount(amount - 1);
  };

  const depositMoney = () => {
    setAmount(amount + 1);
  };

  return <AppContext.Provider value={{ amount, depositMoney, withdrawMoney }}>{children}</AppContext.Provider>;
};

import React, { createContext, useState } from "react";

export const TelegramContext = createContext();

export const TelegramContextProvider = ({ children }) => {
  const [massage, setMassage] = useState();
  const getCurrentMassage = (currentMassage) => {
    setMassage(currentMassage);
  };
  
  return (
    <TelegramContext.Provider value={{ massage, getCurrentMassage }}>
      {children}
    </TelegramContext.Provider>
  );
};

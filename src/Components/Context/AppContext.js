import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contentDisabled, setContentDisabled] = useState(false);

  const handleContentDisabled = () => {
    setContentDisabled(!contentDisabled);
  };

  return (
    <AppContext.Provider value={{ contentDisabled, handleContentDisabled }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

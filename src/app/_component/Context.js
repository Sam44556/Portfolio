"use client";

import { createContext, useContext } from "react";

const Context = createContext();


function Provider({ children }) {
 
 return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  );
}

function useProvider() {
  const context = useContext(Context);
  
  return context;
}

export { Provider, useProvider };

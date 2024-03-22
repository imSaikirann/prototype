import React, { createContext, useContext, useState } from 'react';

const FabricContext = createContext();

export const useFabricContext = () => useContext(FabricContext);

export const FabricProvider = ({ children }) => {
  const [fabricNames, setFabricNames] = useState([]);
  const [sNames, setSNames] = useState([]);

  return (
    <FabricContext.Provider value={{ fabricNames, setFabricNames, sNames, setSNames }}>
      {children}
    </FabricContext.Provider>
  );
};

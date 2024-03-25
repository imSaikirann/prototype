import React, { createContext, useContext, useState } from 'react';

const FabricContext = createContext();

export const useFabricContext = () => useContext(FabricContext);

export const FabricProvider = ({ children }) => {
  const [fabricNames, setFabricNames] = useState([]);
  const [sci,setSci] = useState([])
  const [shirts, setShirts] = useState([]);
  const [value,setValue] = useState([])
  const [top,setTop] = useState([])



  return (
    <FabricContext.Provider value={{ fabricNames,top,setTop, setFabricNames ,shirts,setShirts,sci,setSci,value,setValue}}>
      {children}
    </FabricContext.Provider>
  );
};

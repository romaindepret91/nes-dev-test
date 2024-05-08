import React, { createContext, useEffect, useState } from "react";
import getAllAccessories from "../dbRequests/requests";

export const AccessoriesContext = createContext({
  accessories: [],
  setAccessories: () => {},
});

const AccessoriesContextProvider = (props) => {
  const [accessories, setAccessories] = useState([]);
  let data = null;

  useEffect(() => {
    data = getAllAccessories();
    setAccessories(data);
  }, []);
  return (
    <AccessoriesContext.Provider value={{ accessories, setAccessories }}>
      {props.children}
    </AccessoriesContext.Provider>
  );
};

export default AccessoriesContextProvider;

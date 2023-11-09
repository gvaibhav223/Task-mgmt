import React from "react";
import DataContext from "./Context.jsx";
const ContextState = (props) => {
  const serviceObject = "abc";

  return (
    <DataContext.Provider
      value={{
        serviceObject,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextState;

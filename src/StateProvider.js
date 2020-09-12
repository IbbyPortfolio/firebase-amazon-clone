import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const StateConext = createContext();

// Buil a Provider

export const StateProvider = ({ reducer, initialState, children }) => (
   <StateConext.Provider value={useReducer(reducer, initialState)}>
      {children}
   </StateConext.Provider>
);

export const useStateValue = () => useContext(StateConext);

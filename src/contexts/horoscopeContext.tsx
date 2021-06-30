import React, { createContext, useState, useEffect, useContext, useRef, ReactNode } from 'react';

interface HoroscopeProviderProps {
  children: ReactNode;
};

interface HoroscopeDataProps {
  //
};

export const HoroscopeContext = createContext({} as HoroscopeDataProps);

export const HoroscopeProvider = ({ children }: HoroscopeProviderProps) => {
  return (
    <HoroscopeContext.Provider
      value={{
        value: 'teste',
      }}>
      {children}
    </HoroscopeContext.Provider>
  )
}
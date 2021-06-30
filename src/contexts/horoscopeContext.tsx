import { AxiosResponse } from 'axios';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

interface HoroscopeProviderProps {
  children: ReactNode;
};

interface HoroscopeDataProps {
  horoscopes: HoroscopesResponseDataProps | undefined;
};


export const HoroscopeContext = createContext({} as HoroscopeDataProps);

export const HoroscopeProvider = ({ children }: HoroscopeProviderProps) => {
  const [horoscopes, setHoroscopes] = useState<HoroscopesResponseDataProps>();

  useEffect(() => {
    fetchHoroscope();
  }, []);

  const fetchHoroscope = async () => {
    const resp: AxiosResponse<any> = await api.get("/horoscope/test");
    try {
      if (resp.data) {
        if (resp.status === 200) {
          setHoroscopes(resp.data);
        } else if (resp.status === 404) {
          throw new Error('Tivemos um problema com o servidor, favor verique sua conexão');
        }
      } else {
        throw new Error('Tivemos um problema com o servidor, favor verique sua conexão');
      };
    } catch (error) {
      console.log(error);
      Alert.alert('Ops, tivemos um problema', error);
    };
  };

  return (
    <HoroscopeContext.Provider
      value={{
        horoscopes,
      }}>
      {children}
    </HoroscopeContext.Provider>
  );
};
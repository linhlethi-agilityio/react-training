import { IBanner } from '@data-types/banner';
import { ILocation } from '@data-types/location';
import { ISpecialty } from '@data-types/specialty';
import { createContext, useState } from 'react';
import { IAppContext, IContextProviderProps } from './types';

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = (props: IContextProviderProps) => {
  const { children } = props;
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);
  const [locations, setLocations] = useState<ILocation[]>([]);

  return (
    <AppContext.Provider
      value={{
        banners,
        setBanners,
        specialties,
        setSpecialties,
        locations,
        setLocations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

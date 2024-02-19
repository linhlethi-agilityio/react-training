import { IBanner } from '@data-types/banner';
import { ILocation } from '@data-types/location';
import { ISpecialty } from '@data-types/specialty';
import { ReactNode } from 'react';

export interface IAppContext {
  banners: IBanner[];
  specialties: ISpecialty[];
  locations: ILocation[];
  setBanners: (result: IBanner[]) => void;
  setSpecialties: (result: ISpecialty[]) => void;
  setLocations: (result: ILocation[]) => void;
}

export interface IContextProviderProps {
  children: ReactNode;
}

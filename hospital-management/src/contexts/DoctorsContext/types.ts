import { IDoctor } from '@data-types/doctor';
import { ReactNode } from 'react';

export interface IDoctorsContext {
  state: IDoctorsState;
  actions: {
    doctorsRequestSuccess: (response: IDoctor[]) => void;
    setPage: (pageNumber: number) => void;
    fiterLocation: (selectedLocation: string) => void;
    fiterSpeciaties: (selectedLocation: string) => void;
    resetInitialState: () => void;
  };
}

export interface IContextProviderProps {
  children: ReactNode;
}

export interface IDoctorsState {
  doctors: IDoctor[];
  pageNumber: number;
  loading: boolean;
  errorMessage: null | string;
  selectedSpecialty: string;
  selectedLocation: string;
}

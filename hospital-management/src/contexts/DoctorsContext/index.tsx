import { IDoctor } from '@data-types/doctor';
import { createContext, useReducer } from 'react';
import { doctorsReducer, DOCTORS_ACTIONS } from '@reducers/DoctorsReducer';
import { IContextProviderProps, IDoctorsContext, IDoctorsState } from './types';

export const DoctorsContext = createContext<IDoctorsContext>({} as IDoctorsContext);

export const initialState: IDoctorsState = {
  doctors: [],
  pageNumber: 1,
  loading: false,
  errorMessage: null,
  selectedLocation: '',
  selectedSpecialty: '',
};

export const DoctorsProvider = (props: IContextProviderProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(doctorsReducer, initialState);

  const doctorsRequestSuccess = (response: IDoctor[]) => {
    dispatch({ type: DOCTORS_ACTIONS.REQUEST_DOCTORS_SUCCESS, doctors: response });
  };

  const setPage = (pageNumber: number) => {
    dispatch({ type: DOCTORS_ACTIONS.SET_PAGE, pageNumber: pageNumber });
  };

  const fiterLocation = (selectedLocation: string) => {
    dispatch({ type: DOCTORS_ACTIONS.FILTER_LOCATION, selectedLocation: selectedLocation });
  };

  const fiterSpeciaties = (selectedSpecialty: string) => {
    dispatch({ type: DOCTORS_ACTIONS.FILTER_SPECIALTY, selectedSpecialty: selectedSpecialty });
  };

  const resetInitialState = () => {
    dispatch({
      type: DOCTORS_ACTIONS.RESET_INITIALSTATE,
    });
  };

  return (
    <DoctorsContext.Provider
      value={{
        state,
        actions: {
          doctorsRequestSuccess,
          setPage,
          fiterLocation,
          fiterSpeciaties,
          resetInitialState,
        },
      }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};

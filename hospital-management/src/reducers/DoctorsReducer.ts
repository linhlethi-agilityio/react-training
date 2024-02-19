import { IDoctor } from '@data-types/doctor';
import { IDoctorsState } from '@contexts/DoctorsContext/types';
import { initialState } from '@contexts/DoctorsContext';

export enum DOCTORS_ACTIONS {
  REQUEST_DOCTORS = 'REQUEST_DOCTORS',
  REQUEST_DOCTORS_SUCCESS = 'REQUEST_DOCTORS_SUCCESS',
  REQUEST_DOCTORS_FAIL = 'REQUEST_DOCTORS_FAIL',
  SET_PAGE = 'SET_PAGE',
  FILTER_LOCATION = 'FILTER_LOCATION',
  FILTER_SPECIALTY = 'FILTER_SPECIALTY',
  RESET_INITIALSTATE = 'RESET_INITIASTATE',
}

interface RequestDoctors {
  type: DOCTORS_ACTIONS.REQUEST_DOCTORS;
}

interface RequestDoctorsSuccess {
  type: DOCTORS_ACTIONS.REQUEST_DOCTORS_SUCCESS;
  doctors: IDoctor[];
}

interface RequestDoctorsFail {
  type: DOCTORS_ACTIONS.REQUEST_DOCTORS_FAIL;
  errorMessage: string;
}

interface SetPage {
  type: DOCTORS_ACTIONS.SET_PAGE;
  pageNumber: number;
}

interface filterLocation {
  type: DOCTORS_ACTIONS.FILTER_LOCATION;
  selectedLocation: string;
}

interface filterSpecialty {
  type: DOCTORS_ACTIONS.FILTER_SPECIALTY;
  selectedSpecialty: string;
}

interface resetInitialState {
  type: DOCTORS_ACTIONS.RESET_INITIALSTATE;
}

export type DoctorsAction =
  | RequestDoctors
  | RequestDoctorsSuccess
  | RequestDoctorsFail
  | SetPage
  | filterLocation
  | filterSpecialty
  | resetInitialState;

const doctorsReducer = (state: IDoctorsState, action: DoctorsAction) => {
  switch (action.type) {
    case DOCTORS_ACTIONS.REQUEST_DOCTORS:
      return {
        ...state,
        loading: true,
        errorMessess: null,
      };
    case DOCTORS_ACTIONS.SET_PAGE:
      return {
        ...state,
        pageNumber: action.pageNumber,
      };
    case DOCTORS_ACTIONS.REQUEST_DOCTORS_SUCCESS: {
      const doctors =
        state.pageNumber === initialState.pageNumber
          ? action.doctors
          : [...state.doctors, ...action.doctors];

      return {
        ...state,
        loading: false,
        errorMessess: null,
        doctors,
      };
    }
    case DOCTORS_ACTIONS.REQUEST_DOCTORS_FAIL:
      return {
        ...state,
        loading: false,
        errorMessess: 'request doctors fail',
      };
    case DOCTORS_ACTIONS.FILTER_LOCATION:
      return {
        ...state,
        pageNumber: initialState.pageNumber,
        selectedLocation: action.selectedLocation,
      };
    case DOCTORS_ACTIONS.FILTER_SPECIALTY:
      return {
        ...state,
        pageNumber: initialState.pageNumber,
        selectedSpecialty: action.selectedSpecialty,
      };
    case DOCTORS_ACTIONS.RESET_INITIALSTATE:
      return initialState;

    default:
      return {
        ...state,
      };
  }
};

export { doctorsReducer };

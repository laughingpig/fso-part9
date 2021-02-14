import { State } from "./state";
import { Patient, Diagnosis } from "../types";

export type Action =
  | {
      type: "ADD_PATIENT_DETAIL";
      payload: Patient;
    }
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "SET_DIAGNOSES";
      payload: Diagnosis[];
    }
  | {
    type: "ADD_PATIENT_ENTRY";
      payload: Patient;
    };

export const reducer = (state: State, action: Action): State => {
  console.log(action);
  switch (action.type) {
    case "SET_DIAGNOSES":
      return {
        ...state,
        diagnosis: {
          ...action.payload.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            {}
          ),
          ...state.diagnosis
        }
      };
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "ADD_PATIENT_DETAIL":
      return {
        ...state,
        patientDetail: {
          ...state.patientDetail,
          [action.payload.id]: action.payload
        }
      };       
    case "ADD_PATIENT_ENTRY":
      return {
        ...state,
        patientDetail: {
          ...state.patientDetail,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state;
  }
};

export const addPatientDetail = (content: Patient): Action => {
  return {
    type: 'ADD_PATIENT_DETAIL',
    payload: content
  }
}

export const addPatient = (content: Patient): Action => {
  return {
    type: 'ADD_PATIENT',
    payload: content
  }
}

export const setPatientList = (content: Patient[]) : Action => {
  return {
    type: 'SET_PATIENT_LIST',
    payload: content
  }
}

export const setDiagnosis = (content: Diagnosis[]) : Action => {
  return {
    type: 'SET_DIAGNOSES',
    payload: content
  }
}
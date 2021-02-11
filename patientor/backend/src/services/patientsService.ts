import patientsData from '../../data/patients';
import {NewPatient, NonSensitivePatient, Patient} from '../types';
import {v4 as uuidv4} from 'uuid';

const patients: Array<NonSensitivePatient> = patientsData;

const getEntries = () : Array<NonSensitivePatient> => {
  return patients.map(patient => {
    return {id: patient.id, name:patient.name, dateOfBirth: patient.dateOfBirth, gender: patient.gender, occupation: patient.occupation};
  });
};

const addEntry = (entry: NewPatient) : Patient => {
  const newPatient = {
    id: uuidv4(),
    ...entry
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getEntries,
  addEntry
};

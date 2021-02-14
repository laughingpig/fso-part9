import patientsData from '../../data/patients';
import {NewPatient, PublicPatient, Patient, NewDetEntry} from '../types';
import {v4 as uuidv4} from 'uuid';

const patients: Array<Patient> = patientsData;

const getEntries = () : Array<PublicPatient> => {
  return patients.map(patient => {
    return {id: patient.id, name:patient.name, dateOfBirth: patient.dateOfBirth, gender: patient.gender, occupation: patient.occupation};
  });
};

const getEntry = (id: string) : Patient => {
  const foundPatient = patients.find(p => p.id === id);
  if(foundPatient) {
    return {id: foundPatient.id, ssn:foundPatient.ssn ,name:foundPatient.name, dateOfBirth: foundPatient.dateOfBirth, gender: foundPatient.gender, occupation: foundPatient.occupation, entries: foundPatient.entries} ;
  }
  else {
    throw new Error('Incorrect patient ID');
  }
};

const addEntry = (entry: NewPatient) : Patient => {
  const newPatient = {
    id: uuidv4(),
    ...entry,
    entries: []
  };
  patients.push(newPatient);
  return newPatient;
};

const addDetEntry = (id: string, entry: NewDetEntry): Patient => {
  const newDetEntry = {
    id: uuidv4(),
    ...entry
  };
  const patientToAddEntry = patients.find(p => p.id === id);
  if (patientToAddEntry) {
    patientToAddEntry?.entries.push(newDetEntry);
    return patientToAddEntry;
  }
  else {
    throw new Error('Patient ID not found');
  }
};

export default {
  addDetEntry,
  getEntry,
  getEntries,
  addEntry
};

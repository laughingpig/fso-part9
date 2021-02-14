import { NewPatient, HospitalEntry, HealthCheckEntry, OccupationalHealthcareEntry, SickLeave } from './types';
import {Gender, Discharge, HealthCheckRating} from './types';
/* eslint-disable @typescript-eslint/no-explicit-any */
const isString = (text: any): text is string => { 
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: any): param is Gender => { /* eslint-disable @typescript-eslint/no-explicit-any */
  return Object.values(Gender).includes(param);
};

const isRating = (param: any): param is HealthCheckRating => { /* eslint-disable @typescript-eslint/no-explicit-any */
  return Object.values(HealthCheckRating).includes(param);
};

const isDischarge = (discharge: any) : boolean => { /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  if(!discharge.date || !discharge.criteria || !isString(discharge.date) || !isString(discharge.criteria)) {
    return false;
  }
  return true;
};

const isSickLeave = (sickLeave: any) : boolean => {
  if(!sickLeave.startDate || !sickLeave.endDate || !isDate(sickLeave.startDate) || !isDate(sickLeave.endDate)) {
    return false;
  }
  return true;
};

const isDiagnosis = (param: any): boolean => { /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment  */
  const check: Array<boolean> = param.map((d: any) => { /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */
    if(!isString(d)) {
      return false;
    }
    else {
      return true;
    }
  });

  if (check.some(c => c === false)) {
    return false;
  }
  else {
    return true;
  }
};


const parseName = (name:any) : string => { /* eslint-disable @typescript-eslint/no-explicit-any */
  if (!name || !isString(name)) {/* eslint-disable @typescript-eslint/restrict-plus-operands */
    throw new Error ('Incorrect or missing name: '+name);
  }
  return name;
};

type NewHospitalEntry = Omit<HospitalEntry,'id'>;
type NewHealthCheckEntry = Omit<HealthCheckEntry,'id'>;
type NewOccupationalHealthcareEntry = Omit<OccupationalHealthcareEntry,'id'>;

const parseDate = (date: any): string => { /* eslint-disable @typescript-eslint/no-explicit-any */
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);/* eslint-disable @typescript-eslint/restrict-plus-operands */
  }
  return date;
};

const parseGender = (gender: any): Gender => { /* eslint-disable @typescript-eslint/no-explicit-any */
  if (!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing weather: ' + gender);/* eslint-disable @typescript-eslint/restrict-plus-operands */
  }
  return gender;
};

const parseRating = (healthCheckRating: any): HealthCheckRating => {
  if (!healthCheckRating || !isRating(healthCheckRating)) {
    throw new Error('Incorrect or missing rating: ' + healthCheckRating);/* eslint-disable @typescript-eslint/restrict-plus-operands */
  }
  return healthCheckRating;
};

const parseDiag = (diagnosisCodes: Array<any>): Array<string> => {
  if (!diagnosisCodes || !isDiagnosis(diagnosisCodes)) {
    throw new Error('Incorrect or missing diagnosisCode');/* eslint-disable @typescript-eslint/restrict-plus-operands */
  }/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */
  return diagnosisCodes;  
};

const parseDischarge = (discharge: any): Discharge => {
  if(!discharge || !isDischarge(discharge)) {
    throw new Error('Incorrect or missing discharge');/* eslint-disable @typescript-eslint/restrict-plus-operands */
  }/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return */
  return discharge;
};

const parseSickLeave = (sickLeave: any): SickLeave => {
  if(!sickLeave || !isSickLeave(sickLeave)) {
    throw new Error('Incorrect or missing sickLeave');/* eslint-disable @typescript-eslint/restrict-plus-operands */
  }
  return sickLeave;
};

const toNewPatientEntry = (object: any): NewPatient => { /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
  const newEntry : NewPatient = { /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    name: parseName(object.name), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    dateOfBirth: parseDate(object.dateOfBirth), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    gender: parseGender(object.gender), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    occupation: parseName(object.occupation), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    ssn: parseName(object.ssn), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    entries: []
  };

  return newEntry;
};

export const toNewDetEntry = (object: any): (NewHealthCheckEntry | NewHospitalEntry | NewOccupationalHealthcareEntry)  => { /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
  switch(object.type){
    case "HealthCheck":
      const newEntry : NewHealthCheckEntry = { /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        type: "HealthCheck", /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        description: parseName(object.description), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        date: parseDate(object.date), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        specialist: parseName(object.specialist), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        diagnosisCodes: parseDiag(object.diagnosisCodes), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        healthCheckRating: parseRating(object.healthCheckRating), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      };
      return newEntry;

    case "Hospital":
      const newEntry1 : NewHospitalEntry = { /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        type: "Hospital", /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        description: parseName(object.description), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        date: parseDate(object.date), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        specialist: parseName(object.specialist), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        diagnosisCodes: parseDiag(object.diagnosisCodes), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        discharge: parseDischarge(object.discharge), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      };
      return newEntry1;

    case "OccupationalHealthcare":
      const newEntry2 : NewOccupationalHealthcareEntry = { /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        type: "OccupationalHealthcare", /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        description: parseName(object.description), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        date: parseDate(object.date), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        specialist: parseName(object.specialist), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        diagnosisCodes: parseDiag(object.diagnosisCodes), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        sickLeave: parseSickLeave(object.sickLeave), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        employerName: parseName(object.employerName), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      };
      return newEntry2;

    default:
      throw new Error('Error');
  }

};

export default toNewPatientEntry;
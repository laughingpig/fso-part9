import { NewPatient } from './types';
import {Gender} from './types';
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

const parseName = (name:any) : string => { /* eslint-disable @typescript-eslint/no-explicit-any */
  if (!name || !isString(name)) {/* eslint-disable @typescript-eslint/restrict-plus-operands */
    throw new Error ('Incorrect or missing name: '+name);
  }
  return name;
};

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
const toNewPatientEntry = (object: any): NewPatient => { /* eslint-disable @typescript-eslint/no-explicit-any */
  const newEntry : NewPatient = { /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    name: parseName(object.name), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    dateOfBirth: parseDate(object.dateOfBirth), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    gender: parseGender(object.gender), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    occupation: parseName(object.occupation), /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    ssn: parseName(object.ssn) /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  };

  return newEntry;
};

export default toNewPatientEntry;
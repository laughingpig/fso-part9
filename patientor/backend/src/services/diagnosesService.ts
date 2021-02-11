import diagnosesData from '../../data/diagnoses';
import {Diagnose} from '../types';

const diagnoses: Array<Diagnose> = diagnosesData;

const getEntries = () : Array<Diagnose> => {
  return diagnoses;
};

const addEntry = () : null => {
  return null;
};

export default {
  getEntries,
  addEntry
};

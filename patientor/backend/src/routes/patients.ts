import express from 'express';
import PatientsService from '../services/patientsService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  const entries = PatientsService.getEntries();
  res.send(entries);
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const newPatient = PatientsService.addEntry(newPatientEntry);
    res.json(newPatient);
  }
  catch (e){ /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    res.status(400).send(e.message);
  }
});

export default router;
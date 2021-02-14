import express from 'express';
import PatientsService from '../services/patientsService';
import toNewPatientEntry, {toNewDetEntry} from '../utils';

const router = express.Router();

router.get('/:id', (req, res) => {
  const entry = PatientsService.getEntry(req.params.id);
  res.send(entry);
});

router.get('/', (_req, res) => {
  const entries = PatientsService.getEntries();
  res.send(entries);
});

router.post('/:id/entries',(req, res) => {
  try {
    const newDetEntry = toNewDetEntry(req.body);
    const id = req.params.id;
    const newDet = PatientsService.addDetEntry(id, newDetEntry);
    res.json(newDet);
  }
  catch (e){ /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    res.status(400).send(e.message);
  }
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
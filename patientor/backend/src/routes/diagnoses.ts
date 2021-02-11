import express from 'express';
import DiagnosesService from '../services/diagnosesService';

const router = express.Router();

router.get('/', (_req, res) => {
  const entries = DiagnosesService.getEntries();
  res.send(entries);
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;
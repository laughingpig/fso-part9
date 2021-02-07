//import { parseData, calculateData } from './exerciseCalculator';
import { calculateBmi } from './bmi';
import express from 'express';
import {parseData, calculateData } from './exerciseCalculator';
const app = express();
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if(!req.query.height || !req.query.weight) {
    res.status(400).send({error: 'Missing parameters'});
  } else 
  if(isNaN(Number(req.query.height)) || isNaN(Number(req.query.weight))) {
    res.status(400).send({error: 'Parameters should be numbers'});
  }
  else {
    const response = calculateBmi(Number(req.query.height), Number(req.query.weight));
    res.send(response);
  }
});

app.post('/exercise', (req, res) => {
  const ipdaily=req.body.daily_exercises;
  const iptarget=req.body.target;
  try{  
    const {hours, target} = parseData(ipdaily, iptarget);
    const resp = calculateData(hours, target);
    res.send(resp)
  }
  catch(e) {
    res.status(404).send({error: e.message})
  }
  
});

const PORT = 3003;

app.listen(PORT, ()  => {
  console.log(`Listening on port ${PORT}`);
});
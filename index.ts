import { calculateBmi } from './bmi';
import * as express from 'express';
const app = express();

app.get('/hello', (req, res) => {
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
    res.send(response)
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
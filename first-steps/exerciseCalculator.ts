interface ExerciseCalc {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

interface InputData {
  hours: Array<number>,
  target: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseData = (hours: Array<any>, target: any) : InputData => {
  const hours1 = hours.map(num => Number(num));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allNum = hours1.every((elem:any) => !isNaN(Number(elem)));
  if(!target || !hours1) {
    throw new Error('missing parameters');
  } else
  if(!isNaN(Number(target)) && allNum) {
    return {
      hours: hours1,
      target: Number(target)
    };
  }
  else{
    throw new Error('malformed parameters');
  }
};

export const calculateData = (hours: Array<number>, target: number) : ExerciseCalc => {
  const training = hours.filter(hour => hour > 0).length;
  const average = hours.reduce((sum, hour) => (sum+hour))/hours.length;
  let rating: number, ratingDescription: string;
  if (average < (target/2)) {
    rating = 1,
    ratingDescription = 'Bad';
  } else 
  if (average >= (target/2) && average < target) {
    rating = 2,
    ratingDescription = 'Average';
  } else {
    rating = 3,
    ratingDescription = 'Good work';  
  }
  return {
    periodLength: hours.length,
    trainingDays: training,
    success: average > target ? true: false,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average
  };
};

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

const parseData = (args: Array<string>) : InputData => {
  if (args.length < 4) throw new Error('Not enough arguments')
  const target = args[args.length-1]
  const hours = args.slice(2, args.length-1).map(num => Number(num))
  const allNumbers = hours.every(element => !isNaN(element))
  if(!isNaN(Number(target)) && allNumbers) {
    return {
      hours: hours,
      target: Number(target)
    }
  }
  else {
    throw new Error ('All data should be numbers')
  }
}

const calculateData = (hours: Array<number>, target: number) : ExerciseCalc => {
  const training = hours.filter(hour => hour > 0).length
  const average = hours.reduce((sum, hour) => (sum+hour))/hours.length
  let rating: number, ratingDescription: string
  if (average < (target/2)) {
    rating = 1,
    ratingDescription = 'Bad'
  } else 
  if (average >= (target/2) && average < target) {
    rating = 2,
    ratingDescription = 'Average'
  } else {
    rating = 3,
    ratingDescription = 'Good work'    
  }
  return {
    periodLength: hours.length,
    trainingDays: training,
    success: average > target ? true: false,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average
  }
}

try {
  const { hours, target } = parseData(process.argv);
  console.log(hours, target)
  console.log(calculateData(hours, target));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}

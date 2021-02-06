interface outputBmi {
  height: number,
  weight: number,
  bmi: string
}

export const calculateBmi = (height: number, weight: number): outputBmi => {
  const calc = weight / (height*height/10000);
  let message:string;
  if (calc < 18.55) {
    message =  'Underweight';
  } else
  if (calc >= 18.5 && calc < 23) {
    message =   'Normal';
  } else 
  if (calc >= 23 && calc < 25) {
    message =   'Overweight—At Risk';
  } else 
  if (calc >= 25 && calc < 30) {
    message =   'Overweight—Moderately Obese';    
  } else 
  if (calc >= 30) {
    message =   'Overweight—Severely Obese';
  }

  return {
    height: height,
    weight: weight,
    bmi: message
  }
}
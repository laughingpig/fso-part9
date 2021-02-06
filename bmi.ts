const calculateBmi = (height: number, weight: number): string => {
  const calc = weight / (height*height/10000);
  if (calc < 18.55) {
    return 'Underweight';
  } else
  if (calc >= 18.5 && calc < 23) {
    return 'Normal';
  } else 
  if (calc >= 23 && calc < 25) {
    return 'Overweight—At Risk';
  } else 
  if (calc >= 25 && calc < 30) {
    return 'Overweight—Moderately Obese';    
  } else 
  if (calc >= 30) {
    return 'Overweight—Severely Obese';    
  }
}

console.log(calculateBmi(180,74));
import React from 'react'
import { HealthCheckEntry } from '../types';
import HealthRatingBar from '../components/HealthRatingBar';

const HealthCheck:React.FC<{entry: HealthCheckEntry}> = ({entry}) => {
  return (
    <HealthRatingBar showText={false} rating={entry.healthCheckRating} />
  );
}

export default HealthCheck;
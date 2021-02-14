import React from 'react'
import { OccupationalHealthcareEntry } from '../types';

const OccupationalHealthcare:React.FC<{entry: OccupationalHealthcareEntry}> = ({entry}) => {
  return (
    <>
      {entry.employerName ? <div>Employer: {entry.employerName}</div> : null}
      {entry.sickLeave ? <div>Sick Leave: {entry.sickLeave.startDate} to {entry.sickLeave.endDate} </div>: null}
    </>
  );
}

export default OccupationalHealthcare;
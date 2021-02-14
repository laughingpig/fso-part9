import React from 'react'
import { HospitalEntry } from '../types';

const Hospital:React.FC<{entry: HospitalEntry}> = ({entry}) => {
  return (
    <>
      {entry.discharge ? <div>Discharged: {entry.discharge.date} {entry.discharge?.criteria}</div> : null}
    </>
  );
}

export default Hospital;
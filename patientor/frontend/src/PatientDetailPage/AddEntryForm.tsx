import React from 'react'
import { Message, Tab } from 'semantic-ui-react';
import { NewHospitalEntry, NewOccupationalHealthcareEntry, NewHealthCheckEntry } from '../types';
import HealthCheckForm from './HealthCheckForm';
import HospitalForm from './HospitalForm';
import OccupationalForm from './OccupationalForm';

interface Props {
  onSubmit: (values: NewHospitalEntry | NewOccupationalHealthcareEntry | NewHealthCheckEntry) => void;
  onCancel: () => void;
  error: string;
}

const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel, error }) => {
  const panes = [
    { menuItem: 'Hospital Entry', render: () => <Tab.Pane><HospitalForm onSubmit={onSubmit} onCancel={onCancel} error={error} /></Tab.Pane> },
    { menuItem: 'Occupational Entry', render: () => <Tab.Pane><OccupationalForm onSubmit={onSubmit} onCancel={onCancel} error={error} /></Tab.Pane> },
    { menuItem: 'Health Check Entry', render: () => <Tab.Pane><HealthCheckForm onSubmit={onSubmit} onCancel={onCancel} error={error} /></Tab.Pane> },
  ]
  return (
    <>
      {error ? <Message negative>{error}</Message> : null}
      <Tab panes={panes} />
    </>
  );
};

export default AddEntryForm;
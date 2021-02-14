import { Field, Form, Formik } from 'formik';
import React from 'react'
import { Button, Grid } from 'semantic-ui-react';
import { DiagnosisSelection, TextField } from '../AddPatientModal/FormField';
import { useStateValue } from '../state';
import { NewOccupationalHealthcareEntry } from '../types';

interface Props {
  onSubmit: (values: NewOccupationalHealthcareEntry) => void;
  onCancel: () => void;
  error: string;
}

const OccupationalForm: React.FC<Props> = ({ onSubmit, onCancel, error }) => {
  const [{ diagnosis }] = useStateValue();

  return (
<Formik
initialValues={{
  type: 'OccupationalHealthcare',
  date: '',
  description: '',
  specialist: '',
  diagnosisCodes: [],
  sickLeave:{
    startDate: '',
    endDate: ''
  },
  employerName: ''
}}
onSubmit={onSubmit}
validate={values => {
  const requiredError = "Field is required";
  const errors: { [field: string]: string } = {};
  if (!values.date) {
    errors.date = requiredError;
  }
  if (!values.description) {
    errors.description = requiredError;
  }
  if (!values.specialist) {
    errors.specialist = requiredError;
  }
  if (!values.employerName) {
    errors.employerName = requiredError;
  }
  return errors;      
}}
>
{({ isValid, dirty, setFieldValue, setFieldTouched }) => {

  return (
    <>
    <Form className="form ui">
      <Field
        label="Date"
        placeholder="YYYY-MM-DD"
        name="date"
        component={TextField}
      />
      <Field
        label="Description"
        placeholder="Description"
        name="description"
        component={TextField}
      />
      <Field
        label="Specialist"
        placeholder="Specialist"
        name="specialist"
        component={TextField}
      />                    
      <DiagnosisSelection
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        diagnoses={Object.values(diagnosis)}
      />    
      <Field
        label="Sick Leave Start Date"
        placeholder="YYYY-MM-DD"
        name="sickLeave.startDate"
        component={TextField}
      />
      <Field
        label="Sick Leave End Date"
        placeholder="YYYY-MM-DD"
        name="sickLeave.endDate"
        component={TextField}
      />      
      <Field
        label="Employer Name"
        placeholder="Employer Name"
        name="employerName"
        component={TextField}
      />     
      <Grid>
        <Grid.Column floated="left" width={5}>
          <Button type="button" onClick={onCancel} color="red">
            Cancel
          </Button>
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <Button
            type="submit"
            floated="right"
            color="green"
            disabled={!dirty || !isValid}
          >
            Add
          </Button>
        </Grid.Column>
      </Grid>                       
    </Form>
    </>
  );
}}
</Formik> 
  );
}

export default OccupationalForm;
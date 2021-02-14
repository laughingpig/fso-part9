import React, { useState } from "react";
import axios from "axios";
import { Container, Icon } from "semantic-ui-react";

import { Gender, NewHealthCheckEntry, NewHospitalEntry, NewOccupationalHealthcareEntry, Patient } from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue, addPatientDetail } from "../state";
import { useParams } from "react-router-dom";
import EntryDetails from "../EntryDetails";
import AddEntryForm from "./AddEntryForm";

const PatientDetailPage: React.FC = () => {
  const [{ patientDetail }, dispatch] = useStateValue();
  const [patient, setPatient] = useState<Patient>();
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string>('');

  const submitNewPatient = async (values: NewHospitalEntry | NewOccupationalHealthcareEntry | NewHealthCheckEntry) => {
    setError('');
    try {
      const { data: newEntry } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      dispatch({ type: "ADD_PATIENT_ENTRY", payload: newEntry });
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data);
    }
  };
    
    React.useEffect(() => {  
      const foundPatient:Patient|null|undefined = Object.values(patientDetail).find(p => p.id === id);
      
      if(!foundPatient) {
        const fetchPatient = async () => {
          try {
            const { data: patientFromApi } = await axios.get<Patient>(
              `${apiBaseUrl}/patients/${id}`
            );
            setPatient(patientFromApi);
            dispatch(addPatientDetail(patientFromApi));
          } catch (e) {
            console.error(e);
          }
        };
        fetchPatient();
      }
      else {
        setPatient(foundPatient);
      }
    }, [dispatch, id, patientDetail]);


  if (patient) {
    const icon = () => {
      if (patient.gender === Gender.Male) {
        return <Icon name='mars' />
      } else {
        if (patient.gender === Gender.Female) {
          return <Icon name='venus' />
        }
        else {
          return <Icon name='transgender' />
        }
      }
    }
    return (
      <div className="App">
        <Container textAlign="left">
          <h3>{patient?.name} {icon()}</h3> 
          SSN: {patient?.ssn}<br />
          Occupation: {patient?.occupation}
          <br /><br />

          {patient.entries.length ?
          <>
            <h4>Entries</h4>
            <EntryDetails entries={patient.entries} />
          </> : null
          }
        </Container>
        <br />
        <h3>Add new entry</h3>
        <AddEntryForm onSubmit={submitNewPatient} onCancel={() => null} error={error} />
      </div>
    );
  }
  else {
    return null;
  }
};

export default PatientDetailPage;

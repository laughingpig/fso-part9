import React from 'react'
import { Entry } from "../types";
import HealthCheck from './HealthCheck';
import OccupationalHealthcare from './OccupationalHealthcare';
import { Card, Icon } from 'semantic-ui-react'
import Hospital from './Hospital';
import { useStateValue } from "../state";


const EntryDetails: React.FC<{entries: Entry[]}> = ({entries}) => {
  const [{ diagnosis }] = useStateValue();

  const typeIcon = (type: string) => {
    switch(type) {
      case "Hospital":
        return <Icon name={'hospital'} />
      
      case "HealthCheck":
        return <Icon name={'doctor'} />

      case "OccupationalHealthcare": 
        return <Icon name={'stethoscope'} />

      default: 
        return null;
    }
  }

  const typeSection = (entry: Entry) => {
    switch(entry.type) {      
      case "Hospital":
        return <Hospital entry={entry} />;

      case "HealthCheck":
        return <HealthCheck entry={entry} />;

      case "OccupationalHealthcare": 
        return <OccupationalHealthcare entry={entry} />

      default: 
        return null;
    }
  }  

  return (
    <Card.Group>
    {Object.values(entries).map((entry: Entry) => {
      return (
        <Card fluid>
          <Card.Content>
            <Card.Header>{entry.date} {typeIcon(entry.type)}</Card.Header>
            <Card.Description>
              {entry.description}
              <ul>
              {entry.diagnosisCodes?.map(code => {
                return(
                  <li>{code} {Object.values(diagnosis).find(d => d.code === code)?.name}
                  </li>
                )
              })}           
              </ul>   
              {typeSection(entry)}
            </Card.Description>
          </Card.Content>
        </Card>
      );
    })
    }
    </Card.Group>
  )
}

export default EntryDetails
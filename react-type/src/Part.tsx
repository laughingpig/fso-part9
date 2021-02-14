import React from 'react'
import {CoursePart} from './types';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part: React.FC<{part: CoursePart}> = ({part}) => {
    switch(part.name) {
      case "Fundamentals":
        return <>Name:{part.name} Desc:{part.description} Count:{part.exerciseCount}<br /></>;
        break;
      
      case "Using props to pass data": 
        return <>Name:{part.name} Count:{part.exerciseCount} Group project count:{part.groupProjectCount}<br /></>;
        break;

      case "Deeper type usage":
        return <>Name:{part.name} Desc:{part.description} Count:{part.exerciseCount} Link:{part.exerciseSubmissionLink}<br /></>;
        break;

      case "Deepest type":
        return <>Name:{part.name} Desc:{part.description} Count:{part.exerciseCount} Instructor:{part.instructor}<br /></>;
        break;        

      default:
        return assertNever(part);  
        break;      
    }
}

export default Part;
import React from 'react';
import {CoursePart} from "./types";
import Part from "./Part";

const Content : React.FC<{courseParts: CoursePart[]}> = ({courseParts}) => {
  const res = courseParts.map(part => {
    return <Part key={part.name} part={part} />
  });

  return <>{res}</>
}

export default Content;
import React from 'react';

type Props = {
  courseParts: {name: string, exerciseCount: number}[]
}

const Total : React.FC<Props> = ({courseParts}: Props) => {
  const tot = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0);

  return (
    <p>
    Number of exercises{" "}
    {tot}
    </p>
  )
};

export default Total;
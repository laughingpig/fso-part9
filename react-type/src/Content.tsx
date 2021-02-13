import React from 'react';

type Props = {
  courseParts: {name: string, exerciseCount: number}[]
}

const Content : React.FC<Props> = ({courseParts}: Props) => {
  const cont = courseParts.map(coursePart => {
    return (
      <p key={coursePart.name}>
        {coursePart.name} {coursePart.exerciseCount}
      </p>
    );
  });

  return (
    <>
      {cont}
    </>
  )
};

export default Content;
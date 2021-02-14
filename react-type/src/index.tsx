import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
import {CoursePart} from "./types";

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  
  const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  },
  {
    name: "Deepest type",
    exerciseCount: 14,
    description: "Confusing description",
    instructor: "Mr. Smith"
  }  
];

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
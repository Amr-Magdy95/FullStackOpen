import React from "react";

function Content({ exercises }) {
  return (
    <>
      {exercises.map(({ name, exercises }) => {
        return (
          <p>
            {name} {exercises}
          </p>
        );
      })}
    </>
  );
}

export default Content;

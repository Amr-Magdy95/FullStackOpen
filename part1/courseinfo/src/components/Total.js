import React from "react";

function Total({ exercises }) {
  return (
    <>
      <p>
        Number of exercises{" "}
        {exercises.reduce((total, { exercises }) => {
          return total + exercises;
        }, 0)}
      </p>
    </>
  );
}

export default Total;

import React from "react";

const Word = ({ word }) => {
  return (
    <div>
      <div>Word: {word.name}</div>
      {console.log(word)}
      <div>Definition: {word.definition}</div>
    </div>
  )
}

export default Word;
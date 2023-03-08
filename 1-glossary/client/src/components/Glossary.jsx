import React from "react";
import Word from './Word.jsx';

const Glossary = ({ words }) => {
  return (
    <div>
      {words.map(word =>
        <Word key={word._id} word={word} />
      )}
    </div>
  )
}

export default Glossary;
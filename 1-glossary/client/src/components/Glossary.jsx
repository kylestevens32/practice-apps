import React from "react";
import Word from './Word.jsx';

const Glossary = ({ words, getWords }) => {
  return (
    <div>
      {words.map(word =>
        <Word key={word._id} word={word} getWords={getWords} />
      )}
    </div>
  )
}

export default Glossary;
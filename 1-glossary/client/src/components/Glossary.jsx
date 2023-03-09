import React from "react";
import Word from './Word.jsx';

const Glossary = ({ words, getWords, searchValue }) => {
  return (
    <div>
      {words.map(word =>
        <Word key={word._id} word={word} getWords={getWords} searchValue={searchValue} />
      )}
    </div>
  )
}

export default Glossary;
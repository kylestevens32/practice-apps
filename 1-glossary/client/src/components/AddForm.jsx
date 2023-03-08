import React, { useState } from "react";
import axios from 'axios';

const AddForm = ({ getWords, handleClick }) => {
  const [ word, setWord ] = useState('');
  const [ definition, setDefinition ] = useState('');

  return (
    <div className='add-form'>
      <label>Word: <input onChange={(e) => setWord(e.target.value)} value={word} placeholder='Enter word here'/></label>
      <label>Definition: <input onChange={(e) => setDefinition(e.target.value)} value={definition} placeholder='Enter definition here'/></label>
      <button onClick={() => {
        handleClick(word, definition);
        setWord('');
        setDefinition('');
      }} type='submit'>Submit!</button>
    </div>
  )
}

export default AddForm;
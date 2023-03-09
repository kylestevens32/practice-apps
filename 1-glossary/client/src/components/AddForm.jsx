import React, { useState } from "react";
import axios from 'axios';

const AddForm = ({ handleClick, initialName, initialDefinition }) => {


  const [ word, setWord ] = useState(initialName || '');
  const [ definition, setDefinition ] = useState(initialDefinition || '');

  return (
    <div className='add-form'>
      <label>Word: <input onChange={(e) => {
        setWord(e.target.value)
      }} value={word} placeholder='Enter word here'/></label>
      <label>Definition: <input onChange={(e) => setDefinition(e.target.value)} value={definition} placeholder='Enter definition here'/></label>
      <button onClick={() => {
        handleClick(word, definition);
        setWord('');
        setDefinition('');
      }}>Submit!</button>
    </div>
  )
}

export default AddForm;
import React, { useState } from "react";
import axios from 'axios';

const AddForm = ({ getWords }) => {
  const [ word, setWord ] = useState('');
  const [ definition, setDefinition ] = useState('');

  const handleClick = () => {
    axios.post('/words', {
      name: word,
      definition: definition
    })
    .then(() => {
      setWord('');
      setDefinition('');
      getWords();
    })
  }

  return (
    <div>
      <label>Word: <input onChange={(e) => setWord(e.target.value)} value={word} placeholder='Enter word here'/></label>
      <label>Definition: <input onChange={(e) => setDefinition(e.target.value)} value={definition} placeholder='Enter definition here'/></label>
      <button onClick={handleClick} type='submit'>Submit!</button>
    </div>
  )
}

export default AddForm;
import React, { useState } from "react";

const AddForm = () => {
  const [ word, setWord ] = useState('');
  const [ definition, setDefinition ] = useState('');


  return (
    <form>
      <label>Word: <input onChange={(e) => setWord(e.target.value)} value={word} placeholder='Enter word here'/></label>
      <label>Definition: <input onChange={(e) => setDefinition(e.target.value)} value={definition} placeholder='Enter definition here'/></label>
      <button type='submit'>Submit!</button>
    </form>
  )
}

export default AddForm;
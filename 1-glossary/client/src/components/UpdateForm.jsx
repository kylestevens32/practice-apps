import React from "react";
import AddForm from './AddForm.jsx'
import axios from 'axios';

const UpdateForm = ({ updating, words, getWords }) => {
  const handleupdate = (word, definition) => {
    axios.put('/words', {
      data: {
        id: word._id,
        name: word,
        definition: definition
      }
    })
    .then(() => {
      getWords();
    })
  }

  if (updating) {
    return (
      <div className='update-form'>
        <AddForm handleClick={handleupdate} />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default UpdateForm;

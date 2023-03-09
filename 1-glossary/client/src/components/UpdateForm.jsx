import React from "react";
import AddForm from './AddForm.jsx'
import axios from 'axios';

const UpdateForm = ({ updating, setUpdating, word, getWords }) => {

  const handleUpdate = (updated, definition) => {
    axios.put('/words', {
      _id: word._id,
      name: updated,
      definition: definition
    })
    .then((response) => {
      setUpdating(false);
      getWords();
    })
  }

  if (updating) {
    return (
      <div className='update-form'>
        <AddForm handleClick={handleUpdate} initialName={word.name} initialDefinition={word.definition}/>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default UpdateForm;

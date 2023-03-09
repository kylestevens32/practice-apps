import React, { useState } from 'react';
import UpdateForm from './UpdateForm.jsx';
import axios from 'axios';

const Word = ({ word, getWords }) => {
  const [ updating, setUpdating ] = useState(false);

  const handleDelete = () => {
    axios.delete('/words', {
      data: { id: word._id }
    })
    .then(() => {
      getWords();
    })
  }

  return (
    <div>
      <div className='word'>
        <div>{word.name}: {word.definition}</div>
        <button onClick={() => {
          setUpdating(!updating);
        }} className='update-button'>Update</button>
        <button onClick={handleDelete} className='delete-button'>Delete</button>
      </div>
      <UpdateForm updating={updating} setUpdating={setUpdating} word={word} getWords={getWords} />
    </div>
  )
}

export default Word;
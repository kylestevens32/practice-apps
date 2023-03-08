import React from 'react';
import axios from 'axios';

const Word = ({ word, getWords }) => {
  const handleDelete = () => {
    axios.delete('/words', {
      data: { id: word._id }
    })
    .then(() => {
      getWords();
    })
  }

  return (
    <div className='word'>
      <div>{word.name}: {word.definition}</div>
      <button className='update-button'>Update</button>
      <button onClick={handleDelete} className='delete-button'>Delete</button>
    </div>
  )
}

export default Word;
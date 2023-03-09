import React, { useState, useEffect } from 'react';
import AddForm from './AddForm.jsx';
import Search from './Search.jsx';
import Glossary from './Glossary.jsx';
import axios from 'axios';


const App = () => {
  //var wordsEx = [{name: 'goblin', definition: 'strange little creature'}, {name: 'blue', definition: 'color of the sky'}];

  const [ words, setWords ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');

  useEffect(() => {
    getWords();
  }, [])

  const getWords = () => {
    axios.get('/words')
      .then(({ data }) => {
        setWords(data);
      })
      .catch((err) => {
        console.log('Error getting glossary data');
      })
  }

  const handleClick = (word, definition) => {
    axios.post('/words', {
      name: word,
      definition: definition
    })
    .then(() => {
      getWords();
    })
  }

  return (
    <div>
      <h1>Glossary</h1>
      <AddForm handleClick={handleClick} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Glossary words={words} getWords={getWords} searchValue={searchValue} />
    </div>
  )
}

export default App;
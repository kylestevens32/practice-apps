import React, { useState, useEffect } from 'react';
import AddForm from './AddForm.jsx';
import Search from './Search.jsx';
import Glossary from './Glossary.jsx';
import axios from 'axios';


const App = () => {
  //var wordsEx = [{name: 'goblin', definition: 'strange little creature'}, {name: 'blue', definition: 'color of the sky'}];

  const [ words, setWords ] = useState([]);

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

  return (
    <div>
      <AddForm getWords={getWords} />
      <Search />
      <Glossary words={words} getWords={getWords} />
    </div>
  )
}

export default App;
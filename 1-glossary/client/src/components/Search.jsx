import React, { useState } from "react";

const Search = ({ searchValue, setSearchValue }) => {
  const [ search, setSearch ] = useState('');

  const handleSearch = (empty) => {
    setSearchValue(search);
    setSearch('');
  }

  return (
    <div className='search-bar'>
      <input onChange={e => setSearch(e.target.value)} value={search} placeholder='Search...'></input>
      <button onClick={handleSearch} >Search!</button>
      <div>Currently searching: {searchValue === '' ? 'Nothing' : searchValue}</div>
    </div>
  )
}

export default Search;
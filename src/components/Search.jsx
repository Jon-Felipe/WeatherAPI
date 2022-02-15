import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Search = ({ setQuery }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || text.length === 0) {
      toast.error('Please enter a city');
    } else {
      setQuery(text);
    }
    setText('');
  };

  return (
    <>
      <form className='search-form' onSubmit={onSubmit}>
        <input
          type='text'
          className='search-input'
          value={text}
          placeholder='Enter city name'
          onChange={(e) => setText(e.target.value)}
        />
        <button className='btn search-btn' type='submit'>
          Search
        </button>
      </form>
    </>
  );
};

export default Search;

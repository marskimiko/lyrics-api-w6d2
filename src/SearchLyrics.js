import React, { useState } from 'react'

function SearchLyrics({ getLyrics }) {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  console.log(getLyrics('Coldplay', 'Adventure of a Lifetime' ))

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  )
}

export default SearchLyrics
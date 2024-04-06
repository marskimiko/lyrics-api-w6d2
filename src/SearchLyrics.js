import React, { useState } from 'react'

function SearchLyrics({ getLyrics }) {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  // console.log(getLyrics('Coldplay', 'Adventure of a Lifetime' ))

  const handleSubmit = (e) => {
    e.preventDefault();
    getLyrics(artist, title);
  }

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <input
          placeholder='Artist...'
          type='search'
          value={artist} 
          onChange={(e => setArtist(e.target.value))}
        />
        <input
          placeholder='Song Title...'
          type='search'
          value={title} 
          onChange={(e => setTitle(e.target.value))}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchLyrics
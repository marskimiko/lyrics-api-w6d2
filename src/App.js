import React, { useState } from 'react';
import axios from 'axios';
import SearchLyrics from './SearchLyrics';
import LyricsCard from './LyricsCard';
import styles from './styles.css';

function App() {
  const [lyrics, setLyrics] = useState('')

  function getLyrics(artist, title) {
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      setLyrics(res.data.lyrics)
    })
    .catch(error => {
      console.error('error fetching lyrics:', error);
    })
  }
  // console.log(lyrics)


  return (
    <div className="container">
      <h1>Lyrics</h1>
      <SearchLyrics getLyrics={getLyrics}/>
      <LyricsCard lyrics={lyrics}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import SearchLyrics from './SearchLyrics'; 

function App() {
  const [lyrics, setLyrics] = useState('')

  function getLyrics(artist, title) {
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      console.log(res)
    })
  }


  return (
    <div className="App">
      <SearchLyrics getLyrics={getLyrics}/>
    </div>
  );
}

export default App;

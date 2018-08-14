import React from 'react';
import Song from '../components/Song';

const ChartContainer = (props) =>{

 const songList = props.songs.map(song => {

    return <li key={song.id.attributes["im:id"]}>
      <Song
        artist={song["im:artist"]}
        song={song["im:name"]}
        image={song["im:image"]}  />
      </li>
  })

  return (
    <div className="chart-container">
    <ol className="song-list">{songList}
    </ol>
    </div>
  )
}


export default ChartContainer;

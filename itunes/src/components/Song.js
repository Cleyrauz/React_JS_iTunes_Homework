import React from 'react';

const Song = (props) => {

  if(!props.song){
      return null;
  }
  return (<React.Fragment>
         <p>Song: {props.song.label}</p>
         <p>Artist: {props.artist.label}</p>
         <img src={props.image[0].label} alt="Album Cover"/>
 </React.Fragment>)

}

export default Song;

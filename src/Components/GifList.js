import React from 'react';
import Gif from './Gif';

const GifList = props => { 

  const results = props.data
  let gifs = results.map( giff => 
    <Gif key= {giff.id} url={giff.images.fixed_height.url} />
  )
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;

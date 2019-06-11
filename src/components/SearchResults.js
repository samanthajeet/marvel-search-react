import React from 'react';

const SearchResult = (props)  => {

  const thumbnailURL = props.thumbnail + `/portrait_uncanny.jpg`
  
  return (
    <>
      <h3>{props.name}</h3>
      <img src={thumbnailURL}  alt=""/>
      <p>{props.description}</p>
    </>
  )
}

export default SearchResult

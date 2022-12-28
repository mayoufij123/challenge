import React from 'react'

const Movies = ({hassen}) => {
  return (
    <div>
      <h1>{hassen.name}</h1>
      <h1>{hassen.rating}</h1>
      <img src={hassen.image} alt="hlb"/>
    </div>
  )
}

export default Movies

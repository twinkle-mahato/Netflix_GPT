import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
 
  if(!posterPath) return null;

  return (
    <div className='w-31 md:w-48 pr-5 md:pr-4 cursor-pointer'>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}
      className='w-full h-full object-cover rounded-lg'
      /> 
    </div>
  )
}

export default MovieCard
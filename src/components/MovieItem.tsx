import React from 'react'
import { useLocation } from 'react-router-dom'
import { image_server } from '../constants/constants';

export default function MovieItem() {
    const location = useLocation()
    const data = location.state?.data;
    console.log(data)
  return (
    <div className='movie-item-container'>
        <img src={`${image_server}/t/p/original${data.backdrop_path}`}
        className='movie-item-image'
        />
        <div>{data.title}</div>
        <div>{data.overview}</div>
          <span>
          Genres: 
            {data.genres.map(item => item.name).join(', ')}
          </span>
          {/* <p>
          Release Date: <span>{data.release_date}</span>
        </p> */}
    </div>
  )
}

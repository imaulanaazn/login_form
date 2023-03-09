import React from 'react'
import {Link} from "react-router-dom"

export default function GalleryCard(props) {
  const {name,img,url} = props.data
  console.log(props)
  return (
    <Link to={`http://localhost:3000${url}`}>
      <div className="w-[15rem] h-[15rem] bg-slate-200 relative shadow-lg">
          <img src={`images/${img}`} alt="component img" className='w-full h-full object-cover' />
          <h1 className='absolute bottom-0 left-0 bg-teal-500 w-full text-center text-white py-2'>{name}</h1>
      </div>
    </Link>
  )
}

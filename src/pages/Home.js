import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
    <div>This is My Study Case for Front End</div>
    <ul className='cases'>
        <li><Link to="/form">login form</Link></li>
        <li><Link to="/pagination-table">Table with pagination</Link></li>
        <li><Link to="/payment">payment</Link></li>
        <li><Link to="/dropdown">dropdown</Link></li>
    </ul>   
    </div>
  )
}

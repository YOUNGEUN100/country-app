import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

  const {darkmode,handleDarkmode} = props;

  return (
    <>
      <nav className={darkmode? 'navbar darkmode' : 'navbar'}>
        <h1>Where in the world?</h1>
        <div className='navi'>
        <Link to="/">Home</Link>
        
        </div>
        <button onClick={handleDarkmode} className='dBtn'>Dark Mode</button>
      </nav>
    </>
   
  )
}

export default Navbar
import React from 'react'
import './Navbar.scss'
import Burger from './Burger'


const Navbar = () => {



  return (
  <div className='nav'>
    <div className="backb" >
      <p><i className="arrow-left"></i></p>
    </div>
    <div className='PageName'>Renawi Cars</div>
    <Burger />
  </div>
)
}

export default Navbar;
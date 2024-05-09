import React from 'react'
import './Navbar.css'
import logo from '../../../assets/Assets/logo_big.png'

const Navbar = () => {
  return (
    <>
    <div className='bar'>
        <div className='logo'>
        <img src={logo} alt="" />
        <h3 className='hub'>CLOTHESHUB</h3>
     <ul>
     <li>
      Men
     </li>
    <li>
     Women
     </li>
     <li>
      Kids
     </li>
    </ul>
    </div>
    <button className='search'>Search</button>

    </div>
    </>

  )
}

export default Navbar
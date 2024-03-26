import React from 'react'
import Logo from '../assets/pizza logo.jpg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} />
      </div>
      
      <div className='rightSide'>

            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button>
              <ReorderIcon/>
            </button>
        
        </div>
    </div>
  )
}

export default NavBar

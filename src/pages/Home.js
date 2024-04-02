import React from 'react'
import { Link } from 'react-router-dom'
import pizza from '../assets/pizza.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${pizza})`}}>
      <div className='headerContainer' >
        <h1>Arthur's Pizza</h1>
        <p>Real Pizza Taste to Fit to Your Cravings</p>
        <Link to={"/menu"}>
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

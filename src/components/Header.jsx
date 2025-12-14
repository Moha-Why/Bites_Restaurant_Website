import React, { useState } from 'react'
import navData from '../data/navData'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const Header = ( {lanFunc, lanValue} ) => {
  const [open, setOpen] = useState(false)

  function handleClick() {
    lanFunc((prevValue) => !prevValue)
  }  
  function handleOpen() {
    setOpen((prevValue) => !prevValue)
  }

  return (
    <header className={`flex justify-between py-5 px-[5%] items-center ${lanValue ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`logo flex font-bold text-text text-2xl ${lanValue ? "flex-row-reverse" : "flex-row"} items-center gap-2`}>
        <div className="image bg-button p-2 w-10 h-10 rounded-full aspect-square">
          <img src="/cutlery.png" alt="fork-spoon-knife" aria-label='logo' />
        </div>
        Bites
      </div>
      <nav className={`flex gap-5 ${lanValue ? "flex-row-reverse" : "flex-row"} items-center`}>
        <button onClick={handleOpen} className="hamburger-icon cursor-pointer block md:hidden">
          <FontAwesomeIcon icon="fa-solid fa-bars" size='2xl' className='text-text' />
        </button>
        <ul className={`nav-items z-20 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"} absolute flex-col w-full bg-white shadow p-5 md:p-0 md:shadow-none md:bg-none md:relative md:flex-row md:w-auto md:opacity-100 md:translate-y-0 md:pointer-events-auto transition duration-300 flex items-center gap-5 text-text top-[15%] left-0`}> 
          {navData.map((ele, index) => {
            return <li key={index} className='hover:text-button/50 font-semibold text-lg transition duration-300'><NavLink to={ele.url}>{lanValue ? ele.textAr : ele.textEn}</NavLink></li>
          })}
        </ul>
        <Link to="/cart">
          <div className="cart relative w-10 h-10 flex justify-center items-center rounded-full bg-card border-2 border-button">
            <img src="/shopping-cart.png" className='w-5' alt="shopping cart" aria-label='shopping cart' />
            
          </div>      
        </Link>
        <button onClick={handleClick} aria-label='change language' className="language-switch rt w-10 h-10 cursor-pointer flex justify-center items-center rounded-full bg-card border-2 border-button">
          {lanValue ? "AR" : "EN"}
        </button>
      </nav>
    </header>
  )
}

export default Header


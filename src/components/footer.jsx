import React from 'react'
import { NavLink } from 'react-router-dom'
import navData from '../data/navData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useStore } from '../store'
library.add(fas, far, fab)

const footer = () => {
    const lanValue = useStore(state => state.lanValue)

  return (
    <div className="footer w-full bg-dark h-fit lg:h-[60vh] py-5 flex flex-col gap-5 items-center justify-around text-text">
        <div className="head flex flex-col items-center">
        <div className={`logo flex font-bold text-text text-2xl ${lanValue ? "flex-row-reverse" : "flex-row"} items-center gap-2`}>
            <div className="image bg-button p-2 w-10 h-10 rounded-full aspect-square">
                <img src="/cutlery.png" alt="fork-spoon-knife" aria-label='logo' />
            </div>
            Bites
        </div>
            <h1 className='text-4xl'>كل يوم اقوى!</h1>
        </div>
        <nav className=''>
            <ul className='flex flex-col gap-2 items-center lg:flex-row-reverse justify-between text-xl lg:gap-10 font-light'>
                {navData.map((e, index) => {
                    return <li key={index} className='hover:text-button transition duration-300'><NavLink to={e.url}>{lanValue ? e.textAr : e.textEn}</NavLink></li>
                })}
            </ul>
        </nav>
        <div className="logos flex gap-5">
            <a href="https://facebook.com"><FontAwesomeIcon icon="fa-brands fa-facebook" size='2xl' className='text-gray-100 bg-button p-1 rounded-lg hover:text-red-hot transition'/></a>
            <a href="https://instagram.com"><FontAwesomeIcon icon="fa-brands fa-instagram" size='2xl' className='text-gray-100 bg-button p-1 rounded-lg hover:text-red-hot transition'/></a>
            <a href="https://whatsapp.com"><FontAwesomeIcon icon="fa-brands fa-whatsapp" size='2xl' className='text-gray-100 bg-button p-1 rounded-lg hover:text-red-hot transition'/></a>
        </div>
        <div className="copyright text-center">
            Copyright ©2025 FitMaker. All rights reserved. Designed & Developed by <a href="https://wa.me/201013121403" className='text-purple-600 transition hover:text-red-hot'>Mohamed Ibrahim</a>
        </div>
    </div>
  )
}

export default footer

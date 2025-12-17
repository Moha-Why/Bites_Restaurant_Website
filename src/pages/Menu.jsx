import React, { useEffect, useState } from 'react'
import { useStore } from '../store'
import FoodCard from '../components/FoodCard'
import { easeIn, motion } from 'framer-motion'


const Menu = () => {
  const [selected, setSelected] = useState(0)
  const menu = useStore(state => state.menu)
  const menuUpdate = useStore(state => state.menuUpdate)
  const lanValue = useStore(state => state.lanValue)
  const catagories = ["sandwiches", "desserts", "grilled", "meals", "drinks", "pizza", "portions", "sideDishes", "addOns"]
  const visibleMenu = menu.filter((ele) => {
    return ele.catagory === catagories[selected]
  })

  console.log(visibleMenu)

  useEffect(() => {
    menuUpdate()
  }, [])

  return (
    <>
    <main className="menuItems">
      <motion.h1 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: easeIn}} className='text-text text-5xl w-fit font-bold mx-auto my-5'>{lanValue ? "قائمه الطعام" : "Our Menu Items"}</motion.h1>
      <div className="menuItemsAndCatagory">
        <div className="catagory flex items-center justify-center gap-5 p-5 flex-wrap">
            {catagories.map((ele, index) => {
              return <button key={index} onClick={() => {setSelected(index)}} className={`px-4 py-2 rounded-full border-2 border-button ${selected === index ? "bg-button" : "bg-white"} text-text transition duration-200`}>{ele}</button>
            })}
        </div>
        <div className="item grid grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {visibleMenu.map((ele) => {
              return <FoodCard key={ele.id} item={ele}/>
            }) }
        </div>
      </div>
    </main>
    </>
  )
}

export default Menu

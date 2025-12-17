import React, { useEffect, useState } from 'react'
import { useStore } from '../store'
import { motion } from 'framer-motion'


const FoodCard = ({item}) => {
    // const [toast, setToast] = useState(0)
    const lanValue = useStore(state => state.lanValue)
    const addToCart = useStore(state => state.addToCart)
    const cart = useStore(state => state.cart)
    const setToast = useStore(state => state.setToast)
  return (
    <>
    <motion.div whileHover={{boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.15)"}} initial={{opacity:0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity:0, y: 50}} transition={{duration: 0.5, ease: "easeIn"}}  className="food-card mb-5 min-h-[40vh] sm:min-h-[70vh] w-full flex flex-col gap-2 justify-between items-center rouded-lg px-5 py-2 bg-white shadow-[0_0px_10px_0] shadow-text/5">
        <div className="image overflow-hidden rounded-full aspect-square w-full">
            <img src={item.imgURL} className='w-full h-full object-cover' alt="" />
        </div>
        <h2 className='text-2xl text-text font-bold -mt-2'>{lanValue ? item.name_ar : item.name_en}</h2>
        <div className="rating w-fit bg-button px-2 rounded-full">{item.rating}/5</div>
        <div className="ingredient text-center text-para">{lanValue ? item.description_ar : item.description_en}</div>
        <div className={`footer w-full flex ${lanValue ? 'flex-row-reverse' : ""} my-2 justify-between items-center`}>
            <div className="price">{item.price}<sup className='text-sm'>EGP</sup></div>
            <button onClick={(e) => {addToCart(item.id); setToast()}} className='py-2 px-5 border-2 font-semibold border-button rounded-full hover:bg-button transition duration-300 cursor-pointer'>Add to cart</button>
        </div>
    </motion.div>
    
    </>
  )
}

export default FoodCard

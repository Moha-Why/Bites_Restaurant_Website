import React, { useEffect, useState } from 'react'
import { useStore } from '../store'


const FoodCard = ({item}) => {
    // const [toast, setToast] = useState(0)
    const lanValue = useStore(state => state.lanValue)
    const addToCart = useStore(state => state.addToCart)
    const cart = useStore(state => state.cart)
    const setToast = useStore(state => state.setToast)
  return (
    <>
    <div className="food-card mb-5 min-h-[70vh] w-full flex flex-col gap-2 justify-between items-center rouded-lg px-5 py-2 bg-white shadow-[0_0px_10px_0] hover:shadow-[0_5px_10px_0] hover:shadow-text/10 transition-all duration-300 shadow-text/5">
        <div className="image overflow-hidden aspect-16/12 w-full h-1/2">
            <img src={item.imgURL} className='w-full h-full object-cover' alt="" />
        </div>
        <h2 className='text-2xl text-text font-bold -mt-2'>{lanValue ? item.name_ar : item.name_en}</h2>
        <div className="rating w-fit bg-button px-2 rounded-full">{item.rating}/5</div>
        <div className="ingredient text-center text-para">{lanValue ? item.description_ar : item.description_en}</div>
        <div className={`footer w-full flex ${lanValue ? 'flex-row-reverse' : ""} my-2 justify-between items-center`}>
            <div className="price">{item.price}<sup className='text-sm'>EGP</sup></div>
            <button onClick={(e) => {addToCart(item.id); setToast()}} className='py-2 px-5 border-2 font-semibold border-button rounded-full hover:bg-button transition duration-300 cursor-pointer'>Add to cart</button>
        </div>
    </div>
    
    </>
  )
}

export default FoodCard

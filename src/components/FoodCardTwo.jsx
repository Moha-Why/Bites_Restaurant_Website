import React from 'react'
import { useStore } from '../store'

const FoodCardTwo = ({ele}) => {
    const lanValue = useStore(state => state.lanValue)
    const increase = useStore(state => state.incrementCart)
    const decrease = useStore(state => state.decrementCart)

  return (
    <>
    <div className="food h-[35vh] sm:h-[30vh] flex flex-col sm:rtl:flex-row-reverse justify-between py-5 items-center w-full border-b border-para/25">
        <div className="context-main w-full sm:w-auto justify-start flex gap-5 rtl:flex-row-reverse">
            <div className="image bg-[#fff6e7] rounded-2xl p-2 flex items-center justify-center w-32 h-32">
                <img src={ele.imgURL} className='w-32 alt=' />
            </div>
            <div className="text flex flex-col justify-start gap-2 sm:justify-between rtl:items-end">
                <h4 className='text-2xl font-semibold'>{lanValue ? ele.name_ar : ele.name_en}</h4>
                <div className="rating w-fit bg-button px-2 rounded-full">{ele.rating}/5</div>
            </div>
        </div>
        <div className="numbers w-full sm:w-fit flex justify-between rtl:flex-row-reverse gap-2 items-center">
        <div className="price">{ele.price}<sup className='text-sm'>EGP</sup></div>
        <div className="counter w-24 h-8 flex rtl:flex-row-reverse bg-[#fff6e7] rounded-lg items-center justify-evenly">
            <button onClick={() => decrease(ele.id)} className="decrease w-1/3 h-full font-bold text-button">-</button>
            <input type="text" readOnly className='text-center rounded w-8 h-6 border border-para/50 bg-white outline-0' name="amount" value={ele.amount} id="" />
            <button onClick={() => increase(ele.id)} className="increases w-1/3 h-full font-bold text-button">+</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default FoodCardTwo

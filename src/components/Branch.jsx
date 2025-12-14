import React, { useRef, useState } from 'react'
import { useStore } from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const Branch = ({cart, name, openForm, id}) => {
    const lanValue = useStore(state => state.lanValue)
    const updateOrderDetails = useStore(state => state.updateOrderDetails)
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    function toggle() {
        setOpen(prev => {
            return !prev
        })
    }

  return (
    <section 
    className="branch bg-white border border-para/25 rounded-3xl shadow-[0_5px_5px_0] shadow-text/10 flex flex-col p-4 mb-8"
    >
        <div onClick={toggle} className="header flex cursor-pointer rtl:flex-row-reverse justify-between items-center py-2 px-0">
            <h3 className='text-2xl w-fit font-bold'>{name}</h3>
            <FontAwesomeIcon icon="fa-solid fa-caret-left" className="transition-all text-xl" rotation={open ? 270 : 0} />
        </div>
        <div ref={ref} className="content overflow-hidden transition-all duration-300"
        style={{maxHeight: open ? 1000 : 0}}
        >
            {cart.length > 0
            ? <div className="items flex flex-col gap-5 py-2 border-b border-t border-para/25">
                {cart.map((ele, index) => {
                    return (
                        
                        <div key={index} className="item flex items-center justify-between">
                            <h5 className='name text-lg w-1/3'>{lanValue ? ele.name_ar : ele.name_en}</h5>
                            <p className='amount w-1/3 text-center'>x{ele.amount}</p>
                            <p className='price w-1/3 text-end'>{ele.price * ele.amount}<sup className='text-sm'>EGP</sup></p>
                        </div>
                        
                    )
                })}
            </div> : null}
            <div className="total flex py-5 justify-between items-center">
                <p>{lanValue ? "السعر" : "Total"}</p>
                <p className='price'>{cart.reduce((sum, current) => {
                    return sum + current.price * current.amount
                }, 0)}<sup className='text-sm'>EGP</sup></p>
                
            </div>
            <button onClick={() => {openForm(); updateOrderDetails({branch: id})}} className='w-full bg-button text-white py-2 cursor-pointer rounded-lg hover:saturate-150 transition-all shadow-button/50 hover:shadow-[0_5px_10px_0]'>{lanValue ? `اطلب من ${name}` : `Order from ${name}`}</button>
        </div>
    </section>
  )
}

export default Branch

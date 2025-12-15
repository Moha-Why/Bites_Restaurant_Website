import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { useStore } from '../store'
import FoodCardTwo from '../components/FoodCardTwo'
import Branch from '../components/Branch'
import FormPop from '../components/formPop'
import OrderCompletedToast from '../components/OrderToast'

const cart = () => {
  const navigate = useNavigate()

  const [formState, setFormState] = useState(false) 
  const lanValue = useStore(state => state.lanValue) 
  const orderToastVisible = useStore(state => state.orderToastVisible) 
  const menuUpdate = useStore(state => state.menuUpdate) 
  const updateOrderData = useStore(state => state.updateOrderData) 
  const cartIdentifier = useStore(state => state.cart) 
  const menu = useStore(state => state.menu)

  const cartItems = menu
    .filter(item => cartIdentifier.some(c => c.id === item.id))
    .map(item => {
      const match = cartIdentifier.find(c => c.id === item.id)
      return { ...item, amount: match.amount }
    })

  useEffect(() => {
    menuUpdate()
  }, [])

  useEffect(() => {
    updateOrderData(cartItems)
  }, [cartItems])

  const openForm = () => {
    setFormState(prev => !prev)
  }

  return (
    <main className={`entire-cart flex flex-col  lg:flex-row-reverse w-full h-screen lg:fixed bg-white text-text`}>
      <section className="dishes border-r border-r-para/25 relative w-full lg:w-2/3 rtl:items-end lg:overflow-y-scroll scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-button flex flex-col p-8">
        <div className="return-page">
          <button onClick={() => navigate(-1)} className='flex rtl:flex-row-reverse mb-8 items-center justify-center cursor-pointer bg-para/10 px-3 py-1 rounded-full'>
            <FontAwesomeIcon icon="fa-solid fa-angle-left" className='text-xs' />
            Back
          </button>
        </div>
        <h2 className="w-full text-center sm:w-fit place-holder text-4xl font-bold">Orders</h2>
        {cartItems.length === 0 
        ? <h3 className='text-3xl relative mb-20 sm:m-0 sm:absolute left-1/2 -translate-x-1/2 top-1/2 text-para' >Nothing in here</h3> 
        : cartItems.map((ele, index) => {
          return(
            <FoodCardTwo key={index} ele={ele} />
          )
        })}
      </section>
      <section className="order-details w-full lg:w-1/3 lg:overflow-y-scroll scrollbar-thin scrollbar-thumb-button scrollbar-track-white/10 px-5 py-8">
        <Branch cart={cartItems} name="BranchOne" id="1" openForm={openForm}/>
        <Branch cart={cartItems} name="BranchTwo" id="2" openForm={openForm} />
      </section>
        {formState ? <FormPop closeForm={openForm}/> : null}
        {orderToastVisible ? <OrderCompletedToast/> : null}
        {/* {console.log(orderToastVisible)} */}

    </main>
  )
}

export default cart

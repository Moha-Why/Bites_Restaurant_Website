import React from 'react'
import { Outlet } from 'react-router'
import OrderSync from '../components/OrderSync'

const plainLayout = () => {
  return (
    <>
        
        <Outlet></Outlet>
        <OrderSync/>
    </>
  )
}

export default plainLayout

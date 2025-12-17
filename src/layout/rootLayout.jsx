import React from 'react'
import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/footer'
import { Outlet, useLocation } from 'react-router'
import { useStore } from '../store.js'
import Toast from '../components/Toast.jsx'
import { AnimatePresence } from 'framer-motion'

const rootLayout = () => {
  const arabic = useStore(state => {return state.lanValue})
  const setArabic = useStore(state => {return state.toggleLan})
  const location = useLocation()

  return (
    <>
      <AnimatePresence>
        <div  dir={arabic ? "rtl" : "ltr"}>
          <Header lanFunc={setArabic} lanValue={arabic}/>
          <Outlet key={location.pathname} context={arabic}></Outlet>
          <Footer/>
          <Toast/>
        </div>
      </AnimatePresence>
    </>
  )
}

export default rootLayout

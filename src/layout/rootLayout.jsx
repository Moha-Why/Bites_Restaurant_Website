import React from 'react'
import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/footer'
import { Outlet } from 'react-router'
import { useStore } from '../store.js'
import Toast from '../components/Toast.jsx'

const rootLayout = () => {
  const arabic = useStore(state => {return state.lanValue})
  const setArabic = useStore(state => {return state.toggleLan})
  return (
    <>
      <div dir={arabic ? "rtl" : "ltr"}>
        <Header lanFunc={setArabic} lanValue={arabic}/>
        <Outlet context={arabic}></Outlet>
        <Footer/>
        <Toast/>
      </div>
    </>
  )
}

export default rootLayout

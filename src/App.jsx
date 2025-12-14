import React, { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import RootLayout from './layout/rootLayout'
import PlainLayout from './layout/plainLayout'
import { RouterProvider } from 'react-router-dom'
import Admin from './pages/Admin'

const App = () => {

  const routerData= createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route element={<PlainLayout/>}>
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Admin />} />
      </Route>
    </>
    )
  )

  return (
    <>
        <RouterProvider router={routerData}/>
    </>
  )
}

export default App

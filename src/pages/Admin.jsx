import React from 'react'
import Login from '../components/Login'
import { useStore } from '../store'
import Dashboard from '../components/Dashboard'

const Admin = () => {
    const isAdmin = useStore(state => state.isAdmin)

  return (
    <>
        {/* {isAdmin ?
        <Dashboard/>
        : <Login/>} */}
        <Dashboard/>
    </>
  )
}

export default Admin

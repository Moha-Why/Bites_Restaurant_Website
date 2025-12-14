import React, { useEffect, useState } from 'react'
import { useStore } from '../store'

const Toast = () => {
    const [isVisible, setIsVisible] = useState(false)
    const trigger = useStore(state => state.toast)
    useEffect(() => {
        if (!trigger) return;
        setIsVisible(true)
        const timer = setTimeout(() => {setIsVisible(false)}, 1000)

        return () => clearTimeout(timer)
    }, [trigger])

    // if (!isVisible) return null;
  return (
    <div className={`toast fixed bottom-4 left-1/2 ${isVisible ? "" : "translate-y-[200%]"} -translate-x-1/2 transition duration-300 bg-green-500 text-white px-5 py-2 rounded shadow-lg z-50`}>
    Your item was added succefully
    </div>
  )
}

export default Toast

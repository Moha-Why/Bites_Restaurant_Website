import React, { useEffect } from 'react'
import { useStore } from '../store'
import { supabase } from '../supabase-client'

const OrderSync = () => {
    const orderDetails = useStore(state => state.orderDetails)
    const updateOrderDetails = useStore(state => state.updateOrderDetails)
    const updateOrderToastVisible = useStore(state => state.updateOrderToastVisible)
    const orderData = useStore(state => state.orderData)
    const updateOrderData = useStore(state => state.updateOrderData)
    const clearCart = useStore(state => state.clearCart)
    const {branch, ...importantOrderDetails} = orderDetails

    async function sendOrder() {
        console.log(importantOrderDetails)
        const {error, data} = await supabase.from(`orders${orderDetails.branch}`).insert({...importantOrderDetails, order: orderData})
        if (!error) {
            updateOrderToastVisible(true)
            updateOrderData([])
            clearCart()
        }
    }

    useEffect(() => {
        if (orderDetails.orderName.trim() != "" && orderDetails.paymentMethod !== "card") {
            sendOrder()
            updateOrderDetails({
                address: '',
                phone: '',
                orderName: '',
                orderMethod: '',
                paymentMethod: '',
                branch: null
            })
        }
    }, [orderDetails])


}

export default OrderSync

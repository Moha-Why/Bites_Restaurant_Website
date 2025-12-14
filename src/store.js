import { supabase } from '../src/supabase-client';
import {create} from 'zustand'

function getData() {
    return localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : []
}

export const useStore = create((set) => ({
    branch: 1,
    updateBranch: (num) => {
        set({branch: num})
    },
    isAdmin: localStorage.getItem("admin"),
    setIsAdmin: (admin) => {
        set(state => ({isAdmin: admin}))
    },
    orderDetails: {
        address: '',
        phone: '',
        orderName: '',
        orderMethod: '',
        paymentMethod: '',
        branch: null
    },
    updateOrderDetails: (data) => {
        set(state => ({orderDetails: {...state.orderDetails, ...data}}))
    },
    toast: 0,
    setToast: () => {
        set(state => ({toast: state.toast + 1}))
    },
    menu: [],
    menuUpdate: async () => {
        const {data} = await supabase.from("menu").select("*")
        set(state => ({
            menu: data
        }))
    },
    orderData: [],
    updateOrderData: (data) => {
        set(state => ({orderData: data}))
    },
    cart: getData(),
    addToCart: (id) => {set(state => {
        console.log(state.cart)
        let item = state.cart.find(ele => ele.id === id) ? state.cart.find(ele => ele.id === id) : null;
        let newCart;
        if (item !== null) {
            newCart = state.cart.map(ele => {
                return ele.id === item.id ? {...ele, amount: ele.amount + 1} : ele
            })
        } else {
            newCart = [...state.cart, {id: id, amount: 1}];
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {cart: newCart}
    })}, 
    clearCart: () => {
        set(state => {
            localStorage.removeItem("cart")
            return {cart: []}
        })
    },
    incrementCart: (id) => {
        set(state => {
            let newCart = state.cart.map((ele) => {
                return ele.id === id ? {...ele, amount: ele.amount+1}: ele
            })
            localStorage.setItem("cart", JSON.stringify(newCart))
            return {cart: newCart}
        })
    },
    decrementCart: (id) => {
        set(state => {
            let newCart = state.cart.map((ele) => {
                return ele.id === id ? {...ele, amount: ele.amount - 1}: ele
            }).filter(item => item.amount > 0)
            localStorage.setItem("cart", JSON.stringify(newCart))
            return {cart: newCart}
        })
    },
    removeCart: (id) => {
        set(state => {
            let newCart = state.cart.filter(ele => ele.id !== id)
            localStorage.setItem("cart", JSON.stringify(newCart))
            return {cart: newCart}
        })
    },
    lanValue: true,
    toggleLan: () => set((state) => ({ lanValue: !state.lanValue}))
}))
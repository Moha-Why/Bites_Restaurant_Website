import React, { useEffect } from 'react'
import { useStore } from '../store'


const formPop = ({closeForm}) => {
    const lanValue = useStore(state => state.lanValue)
    const updateOrderDetails = useStore(state => state.updateOrderDetails)
    const orderData = useStore(state => state.orderData)
    const orderDetails = useStore(state => state.orderDetails)

    function handleSubmit(e) {
        e.preventDefault()
        const form = new FormData(e.target)
        const data = Object.fromEntries(form)
        if (data.orderName.trim() === "" | data.phone.trim() === "" | data.address.trim() === "") {
            console.error("you cant do that")
            return;
        } else if (data.paymentMethod === "card") {
            console.log("navigating...")
            
        } else if (orderData.length === 0) {
            alert("There is no order")
            return;
        }
            updateOrderDetails(data)
            closeForm()
    }



  return (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{lanValue ? "سجل معلوماتك" : "Order Info"}</h2>
                    <button onClick={closeForm} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>
                <form onSubmit={handleSubmit} class="">
                    <label>{lanValue ? "اسم الطلب" : "Order Name"}</label>
                    <input type="text" className='w-full mb-2 rounded px-4 py-2 border border-para/25 outline-0' name="orderName" id="" />
                    <label>{lanValue ? "التلفون" : "Phone"}</label>
                    <input type="phone" className='w-full mb-2 rounded px-4 py-2 border border-para/25 outline-0' name="phone" id="" />
                    <label>{lanValue ? "العنوان" : "Address"}</label>
                    <input type="text" className='w-full mb-2 rounded px-4 py-2 border border-para/25 outline-0' name="address" id="" />

                    <div className="orderMethod flex w-full gap-5 md:px-5">
                        <label className='w-1/2'>
                            <input type="radio" name="orderMethod" defaultChecked value="Delivery" className='hidden peer' id="" />
                            <div className="h-10 flex transition duration-300 justify-center items-center rounded-md border-2 border-button peer-checked:bg-button peer-checked:saturate-200 peer-checked:text-white">
                            {lanValue ? "دليفرى" : "Delivery"}
                            </div>
                        </label>
                        <label className='w-1/2'>
                            <input type="radio" name="orderMethod" value="pickUp" className='hidden peer' id="" />
                            <div className=" h-10 py-2 transition duration-300 flex justify-center items-center rounded-md border-2 border-button peer-checked:bg-button peer-checked:saturate-200 peer-checked:text-white">
                                {lanValue ? "الاستلام من المطعم" : "Pick up"}
                            </div>
                        </label>
                    </div>

                    <div className="paymentMethod flex mt-5 flex-col w-full gap-2 px-5">
                        <label className='w-full'>
                            <input type="radio" name="paymentMethod" disabled value="card" className='hidden peer' id="" />
                            <div className="h-10 flex rtl:flex-row-reverse transition duration-300 justify-center gap-5 items-center rounded-md border-2 border-green-400 peer-checked:bg-green-400 peer-checked:text-white peer-disabled:opacity-50">
                                <img src="/card.png" className='w-8' alt="" />
                                {lanValue ? "البطاقه" : "Card"}
                            </div>
                        </label>
                        <label className='w-full'>
                            <input type="radio" name="paymentMethod" defaultChecked value="paymentUponReceipt" className='hidden peer' id="" />
                            <div className=" h-10 py-2 transition duration-300 flex rtl:flex-row-reverse justify-center gap-5 items-center rounded-md border-2 border-green-400 peer-checked:bg-green-400 peer-checked:text-white ">
                                <img src="/delivery-man.png" className='w-8' alt="" />
                                {lanValue ? "الدفع عند الاستلام" : "Payment upon receipt"}
                            </div>
                        </label>

                        <button type='submit' className='w-full mt-5 bg-button text-white py-2 cursor-pointer rounded-lg hover:saturate-150 transition-all shadow-button/50 hover:shadow-[0_5px_10px_0]'>{lanValue ? "اطلب الان!" : "Order now!"}</button>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default formPop

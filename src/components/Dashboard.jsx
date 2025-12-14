
import React, { useEffect, useState } from 'react';
import { Truck, Package, Phone, MapPin, CreditCard, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '../supabase-client';
import { useStore } from '../store';


function OrderCard({ order, onComplete, total }) {
  return (
    <div className="bg-[#fff6e7] rounded-lg p-4 shadow-sm border border-gray-200 flex flex-col h-full max-h-[45vh]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-gray-900 truncate">{order.orderName}</h3>
          <div className="flex items-center gap-2 mt-1">
            {order.orderMethod === "Delivery" ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-blue-600 text-white rounded">
                <Truck size={12} />
                DELIVERY
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-green-600 text-white rounded">
                <Package size={12} />
                PICKUP
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          {order.paymentMethod === 'card' ? <div className="px-4 py-2 rounded-lg text-white bg-green-400">مدفوع</div> 
          : <div className="text-2xl font-bold text-gray-900">{order.order.reduce((sum, current) => {return sum + current.price * current.amount},0)}<sup className='text-sm'>EGP</sup></div>}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 mb-3 min-h-0">
        <div className="flex items-start gap-2 text-sm">
          <MapPin size={14} className="text-gray-600 mt-0.5 shrink-0" />
          <span className="text-gray-700 wrap-break-words">{order.address}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Phone size={14} className="text-gray-600 shrink-0" />
          <span className="text-gray-700">{order.phone}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock size={14} className="text-gray-600 shrink-0"/>
          <span className="text-gray-700">{new Date(order.created_at).toLocaleString("en-EG", {
                timeZone: "Africa/Cairo",
                // day: "2-digit",
                // month: "2-digit",
                // year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                })}
            </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <CreditCard size={14} className="text-gray-600 shrink-0" />
          <span className="text-gray-700">{order.paymentMethod === 'paymentUponReceipt' ? "الدفع عند الاستلام" : order.paymentMethod}</span>
        </div>

        <div className="border-t border-gray-300 pt-2 mt-2">
          <div className="space-y-1">
            {order.order.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm">
                <span className="text-gray-800">{item.name_ar}</span>
                <span className="font-medium text-gray-900 ml-2">x{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => onComplete(order.id)}
        className="bg-button hover:saturate-150 text-white transition-all duration-200 w-full flex items-center justify-center gap-2 py-2 px-4 rounded font-medium text-sm"
      >
        <CheckCircle size={16} />
        Mark as Completed
      </button>
    </div>
  );
}

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState(1)
  const branch = useStore(state => state.branch)
  const updateBranch = useStore(state => state.updateBranch)


  const handleComplete = async (orderId) => {
    const prev = orders;
    setOrders(prev.filter(o => o.id !== orderId));
    const { error } = await supabase.from(`orders${branch}`).delete().eq('id', orderId);
    if (error) setOrders(prev); // rollback
  };


  async function fetchOrders() {
    const {data} = await supabase.from(`orders${branch}`).select("*")
    setOrders(data)
  }


  useEffect(() => {
  const channel = supabase
    .channel(`orders-channel-${branch}`)
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: `orders${branch}` },
      (payload) => setOrders(prev => [...prev, payload.new])
    )
    .subscribe();

  fetchOrders(); // just fire and forget

  return () => {
    supabase.removeChannel(channel);
  };
}, [branch]);


  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b flex justify-between items-center border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mr-5 px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Orders Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">{orders.length} active orders</p>
        </div>
        <div className="branches ml-5 p-2 flex gap-5 rounded-lg">
          <button onClick={() => {updateBranch(1); setSelected(1)}} className={`px-4 py-2 rounded-lg border border-button ${selected === 1 ? "bg-button text-white" : "bg-white"} text-text transition duration-200`}>Branch One</button>
          <button onClick={() => {updateBranch(2); setSelected(2)}} className={`px-4 py-2 rounded-lg border border-button ${selected === 2 ? "bg-button text-white" : "bg-white"} text-text transition duration-200`}>Branch Two</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No active orders</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                onComplete={handleComplete}
                total={order.paymentMethod === 'card' ? "paid" : "" }
              />
            ))}
          </div>
        )}
      </main>
{/* 
      <style>{`
        .color-button {
          background-color: #ff6b35;
          color: white;
          transition: background-color 0.2s;
        }
        .color-button:hover {
          background-color: #e55a2b;
        }
      `}</style> */}
    </div>
  );
}

export default Dashboard;

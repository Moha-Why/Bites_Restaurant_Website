import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useStore } from '../store';

const OrderCompletedToast = () => {
  const [visible, setVisible] = useState(true);
  const lanValue = useStore(state => state.lanValue)
  const orderToastVisible = useStore(state => state.orderToastVisible)
  const updateOrderToastVisible = useStore(state => state.updateOrderToastVisible)


  // Handle close with exit animation
  const handleClose = () => {
    setVisible(false)
    setTimeout(() => updateOrderToastVisible(false), 300);
  };

  // Auto-dismiss after 5 seconds
//   useEffect(() => {
//     if (isVisible && !isExiting) {
//       const timer = setTimeout(() => handleClose(), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible, isExiting]);

  if (!orderToastVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-20 px-4 pointer-events-none">
      {/* 
        Toast Container
        - Smooth entrance: opacity + translateY transform
        - Exit animation: reverse the entrance
      - Duration-300 for natural, not-too-fast motion
      */}
      <div
        className={`
          pointer-events-auto
          bg-white rounded-2xl shadow-lg
          w-full max-w-md
          z-50
          transition-all duration-300 ease-out
          ${visible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4'
          }
        `}
      >
        {/* Accent bar - subtle visual emphasis */}
        <div className="h-1 bg-emerald-500 rounded-t-2xl" />
        
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Success Icon - emerald accent color for positive reinforcement */}
            <div className="shrink-0">
              <CheckCircle2 
                className="w-6 h-6 text-emerald-500" 
                strokeWidth={2}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Order completed
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your order has been successfully processed. We'll contact you shortly.
              </p>
            </div>

            {/* Close button - subtle, unobtrusive */}
            <button
              onClick={handleClose}
              className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Close notification"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* CTA Section with secondary background */}
          <div className="mt-4 -mx-6 -mb-6 p-4 bg-[#fff6e7] rounded-b-2xl">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handleClose}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  console.log('View order clicked');
                  handleClose();
                }}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm"
              >
                Have a nice day
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompletedToast
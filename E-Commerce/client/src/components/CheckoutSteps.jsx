// src/components/CheckoutSteps.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const location = useLocation();

  const steps = [
    { 
      number: 1, 
      name: 'Login', 
      path: '/login', 
      active: step1,
      icon: '🔐'
    },
    { 
      number: 2, 
      name: 'Shipping', 
      path: '/shipping', 
      active: step2,
      icon: '🚚'
    },
    { 
      number: 3, 
      name: 'Payment', 
      path: '/payment', 
      active: step3,
      icon: '💳'
    },
    { 
      number: 4, 
      name: 'Place Order', 
      path: '/placeorder', 
      active: step4,
      icon: '✅'
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                ${step.active 
                  ? 'bg-lightPurple text-white shadow-lg' 
                  : 'bg-gray-300 text-gray-600'
                }
              `}>
                {step.active ? step.icon : step.number}
              </div>
              
              {/* Step Label */}
              <span className={`
                mt-2 text-sm font-medium transition-all duration-300
                ${step.active 
                  ? 'text-lightPurple' 
                  : 'text-gray-500'
                }
              `}>
                {step.name}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`
                w-16 h-1 mx-4 transition-all duration-300
                ${steps[index + 1].active 
                  ? 'bg-lightPurple' 
                  : 'bg-gray-300'
                }
              `} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;
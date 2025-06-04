// import React from 'react'

// const OrderStepper = () => {
//   return (
//     <div>OrderStepper</div>
//   )
// }

// export default OrderStepper

import React from 'react';
import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Step {
  label: string;
  value: string;
}

interface Props {
  orderStatus: string;
}

const statusStep: Step[] = [
  { label: 'Placed', value: 'PLACED' },
  { label: 'Confirmed', value: 'CONFIRMED' },
  { label: 'Shipped', value: 'SHIPPED' },
  { label: 'Delivered', value: 'DELIVERED' },
];

const OrderStepper: React.FC<Props> = ({ orderStatus }) => {
  const currentStep = statusStep.findIndex(step => step.value === orderStatus);

  return (
    <Box className="my-10">
      <div className="flex justify-between relative">
        {statusStep.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full relative">
            {/* Circle with Icon */}
            <Box
              sx={{ zIndex: 10 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${
                  index <= currentStep
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
            >
              {index <= currentStep ? <CheckCircleIcon fontSize="small" /> : <FiberManualRecordIcon fontSize="small" />}
            </Box>

            {/* Label */}
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? 'text-teal-700 font-medium' : 'text-gray-500'
              }`}
            >
              {step.label}
            </span>

            {/* Step Line */}
            {index < statusStep.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0 transform -translate-x-1/2">
                <div
                  className="h-full bg-teal-500 transition-all duration-500"
                  style={{
                    width:
                      index < currentStep
                        ? '100%'
                        : index === currentStep
                        ? '50%'
                        : '0%',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default OrderStepper;

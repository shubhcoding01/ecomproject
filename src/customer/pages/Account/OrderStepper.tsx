// import React from 'react'

// const OrderStepper = () => {
//   return (
//     <div>OrderStepper</div>
//   )
// }

// export default OrderStepper

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CancelIcon from "@mui/icons-material/Cancel";

const steps = [
  { label: "Order Placed", value: "PLACED" },
  { label: "Packed", value: "CONFIRMED" },
  { label: "Shipped", value: "SHIPPED" },
  { label: "Arriving", value: "ARRIVING" },
  { label: "Delivered", value: "DELIVERED" },
];

const canceledSteps = [
  { label: "Order Placed", value: "PLACED" },
  { label: "Order Canceled", value: "CANCELLED" },
];

interface OrderStepperProps {
  orderStatus: string;
}

const OrderStepper: React.FC<OrderStepperProps> = ({ orderStatus }) => {
  const [activeSteps, setActiveSteps] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setActiveSteps(canceledSteps);
    } else {
      setActiveSteps(steps);
    }
  }, [orderStatus]);

  const currentIndex = activeSteps.findIndex(step => step.value === orderStatus);

  return (
    <div className="flex items-center justify-between relative">
      {activeSteps.map((step, index) => {
        const isActive = index <= currentIndex;
        const isCurrent = index === currentIndex;
        const isCancelled = step.value === "CANCELLED";

        return (
          <div key={step.value} className="flex-1 flex flex-col items-center relative">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full z-10 ${
                isCancelled
                  ? "bg-red-500 text-white"
                  : isActive
                  ? "bg-teal-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {isCancelled ? (
                <CancelIcon fontSize="small" />
              ) : isActive ? (
                <CheckCircleIcon fontSize="small" />
              ) : (
                <FiberManualRecordIcon fontSize="small" />
              )}
            </div>
            <Typography
              variant="caption"
              className={`text-center mt-2 ${
                isActive ? "text-teal-700 font-semibold" : "text-gray-500"
              }`}
            >
              {step.label}
            </Typography>
            {/* Step connector line */}
            {index < activeSteps.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0 transform translate-x-1/2 -translate-y-1/2">
                <div
                  className="h-full bg-teal-500 transition-all duration-500"
                  style={{
                    width:
                      index < currentIndex
                        ? "100%"
                        : index === currentIndex
                        ? "50%"
                        : "0%",
                  }}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrderStepper;

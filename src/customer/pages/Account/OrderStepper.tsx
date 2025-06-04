import React, { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Description } from "@mui/icons-material";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Packed", description: "Item Packed in Dispatch Warehouse", value: "CONFIRMED" },
  { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
  { name: "Arriving", description: "by 16 Jul", value: "ARRIVING" },
  { name: "Delivered", description: "on 18 Jul", value: "DELIVERED" },
];

const canceledSteps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Order Cancelled", description: "on Thu, 11 Jul", value: "CANCELLED" },
];

const OrderStepper = ({ orderStatus }: { orderStatus: string }) => {
  const [statusSteps, setStatusSteps] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusSteps(canceledSteps);
    } else {
      setStatusSteps(steps);
    }
  }, [orderStatus]);

  const currentStep = statusSteps.findIndex((step) => step.value === orderStatus);

  return (
    <Box className="w-full max-w-4xl mx-auto my-10">
      <div className="flex justify-between items-start">
        {statusSteps.map((step, index) => (
          <div key={index} className="flex-1 px-2 flex flex-col items-center relative">
            {/* Line connecting steps */}
            {index < statusSteps.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0"></div>
            )}

            {/* Step icon */}
            <Box
              className={`z-10 w-8 h-8 rounded-full flex items-center justify-center 
                ${index <= currentStep ? "bg-teal-500 text-white" : "bg-gray-300 text-gray-600"}`}
            >
              {index <= currentStep ? <CheckCircleIcon fontSize="small" /> : <FiberManualRecordIcon fontSize="small" />}
            </Box>

            {/* Step content */}
            <div
              className={`text-center mt-3 p-2 w-full rounded-md
                ${step.value === orderStatus ? "bg-primary-color text-white font-medium" : ""}
                ${orderStatus === "CANCELLED" && step.value === "CANCELLED" ? "bg-red-500 text-white" : ""}
              `}
            >
              <p className="text-sm">{step.name}</p>
              <p className="text-xs text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default OrderStepper;

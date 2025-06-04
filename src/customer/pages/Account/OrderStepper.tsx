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

// const OrderStepper = ({ orderStatus }: { orderStatus: string }) => {
//   const [statusSteps, setStatusSteps] = useState(steps);

const currentStep = 2;

const OrderStepper = ({ orderStatus }: any) => {
  const [statusSteps, setStatusSteps] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusSteps(canceledSteps);
    } else {
      setStatusSteps(steps);
    }
  }, [orderStatus]);

  // const currentStep = statusSteps.findIndex((step) => step.value === orderStatus);

  return (
    <Box className=" mx-auto my-10">
      {/* <div className="flex justify-between items-start"> */}
        {statusSteps.map((step, index) => (
          <>
          <div key={index} className={`flex px-4 `}>
            <div className="flex flex-col items-center">
            <Box sx={{zIndex: -1}} 
            className={`w-8 h-8 rounded-full flex items-center justify-center
             z-10 ${index <= currentStep ? 
             "bg-gray-200 text-teal-500" 
             : "bg-gray-300 text-gray-600"}`}>
              
              {step.value === "orderStatus" ? (
              <CheckCircleIcon fontSize="small" />
            ) : (
              <FiberManualRecordIcon sx={{zIndex:-1}}/>
            )}
            </Box>

            {index < statusSteps.length - 1 && (
              <div 
              className={`border h-20 w-[2px] `}></div>
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
          </>
        ))}
      {/* </div> */}
    </Box>
  );
};

export default OrderStepper;

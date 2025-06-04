// import React from 'react'

// const OrderStepper = () => {
//   return (
//     <div>OrderStepper</div>
//   )
// }

// export default OrderStepper

import React, { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Order steps for normal delivery
const steps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Packed", description: "Item Packed in Dispatch Warehouse", value: "CONFIRMED" },
  { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
  { name: "Arriving", description: "by 16 Jul", value: "ARRIVING" },
  { name: "Arrived", description: "Delivered on 18 Jul", value: "DELIVERED" },
];

// Order steps for cancelled orders
const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Order Canceled", description: "Cancelled on Fri, 12 Jul", value: "CANCELLED" },
];

interface Step {
  name: string;
  description: string;
  value: string;
}

interface Props {
  orderStatus: string; // e.g., 'PLACED', 'CONFIRMED', 'CANCELLED', etc.
}

const OrderStepper: React.FC<Props> = ({ orderStatus }) => {
  const [statusStep, setStatusStep] = useState<Step[]>(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  // Find current step index
  const currentStepIndex = statusStep.findIndex((step) => step.value === orderStatus);

  return (
    <Box className="mx-auto my-10 px-4">
      {statusStep.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isCurrent = index === currentStepIndex;

        return (
          <Box key={step.value} display="flex" alignItems="center">
            <Box mr={2}>
              {isCompleted ? (
                <CheckCircleIcon color="success" />
              ) : isCurrent ? (
                <FiberManualRecordIcon color="primary" />
              ) : (
                <FiberManualRecordIcon color="disabled" />
              )}
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={isCurrent ? "bold" : "normal"}>
                {step.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </Box>
            {index !== statusStep.length - 1 && (
              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default OrderStepper;

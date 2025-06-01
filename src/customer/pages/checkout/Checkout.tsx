import { Button } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";

const Checkout = () => {
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Select Address</h1>
            <Button>Add New Address</Button>
          </div>
          <div className="text-xs font-medium space-y-5">
            <p>Saved Address</p>
            <div className="space-y-5">
              {[1, 2, 3].map((item) => (
                <AddressCard key={item} />
              ))}
            </div>
          </div>
          <div className="py-4 px-5 border rounded-md space-y-3">
            <Button>Add New Address</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

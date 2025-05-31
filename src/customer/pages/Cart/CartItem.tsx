import { Add, Remove } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import React from "react";

const CartItem = () => {
  const handleUpdateQuantity = () => {
    // Logic to update the quantity of the item in the cart
    console.log("Update quantity");
  }
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <img
          className="w-[90px] rounded-md"
          src="https://m.media-amazon.com/images/I/61HS4sTDnPL._AC_AA152_.jpg"
          alt=""
        />
      </div>
      <div className="space-y-2 ">
        <h1 className="font-semibold text-lg">
          Men's Irregular Geometric Pattern
        </h1>
        <p className="text-gray-600 font-medium text-sm">
          Stay stylish and comfortable with this geometric-patterned polo
          T-shirt
        </p>
        <p className="text-gray-400 text-xs">
          <strong>Sold by:</strong> Kaff Apparels
        </p>
        <p className="text-sm">10 days Return & Exchange</p>
        <p className="text-sm text-gray-500">
          <strong>Quantiy : </strong>5
        </p>
      </div>

      <Divider />
      <div className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3 w-[140px]">
          <Button
            disabled={true}
            
          >
            <Remove />
          </Button>
          <span>{5}</span>
          <Button onClick={handleUpdateQuantity}>
            <Add />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

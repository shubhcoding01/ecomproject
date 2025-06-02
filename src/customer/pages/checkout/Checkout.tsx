import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import Addressform from "./Addressform";
import PricingCard from "../Cart/PricingCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const paymentGateway = [
  {
    value:"Razorpay",
    image:"https://images.prismic.io/contrary-research/65ced9109be9a5b998b5e6ce_razorpaycover.png?auto=format,compress",
    label:"Razorpay"
  },
  
  {
    value:"Stripe",
    image:"https://stripe.com/img/v3/home/twitter.png",
    label:"Stripe"
  }
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add New Address</Button>
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
              <Button onClick={handleOpen}>Add New Address</Button>
            </div>
          </div>
          <div>
            <div className="border rounded-md p-5 space-y-3">
              <div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex justify-between pr-0"
                >
                  {paymentGateway.map((gateway) => (
                    <FormControlLabel
                      key={gateway.value}
                      value={gateway.value}
                      control={<Radio />}
                      label={
                        <div className="flex items-center gap-2">
                          <img
                            src={gateway.image}
                            alt={gateway.label}
                            className="w-8 h-8"
                          />
                          {gateway.label}
                        </div>
                      }
                    />
                  ))}
                  <FormControlLabel
                    value="cod"
                    control={<Radio />}
                    label="Cash on Delivery"
                  />
                  
                  
                </RadioGroup>
              </div>
              <PricingCard />
              <div className="p-3">
                <Button
                  variant="contained"
                  sx={{ py: "11px" }}
                  color="primary"
                  fullWidth
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Addressform />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;

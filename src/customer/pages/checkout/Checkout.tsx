import { Box, Button, Modal } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import Addressform from "./Addressform";
import PricingCard from "../Cart/PricingCard";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

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
            <div className='border rounded-md p-5 space-y-3'>
              <div>
                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
              </div>
                      <PricingCard />
                      <div className='p-3'>
                        <Button variant='contained' sx={{py:"11px"}} color='primary' fullWidth>
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

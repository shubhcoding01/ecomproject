import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const FilterSection = () => {
  return (
    <div className="z-50 space-y-5 bg-white">
      <div className="flex items-start justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filter</p>
        <Button
          size="small"
          className="text-blue-500 cursor-pointer font-semibold"
        >
          Clear all
        </Button>
      </div>
      <Divider />

      <section>
        <FormControl>
          <FormLabel 
          sx={{
            fontSize:"16px",
            fontWeight:"bold",
            color:"gray-500",
            ml:"10px",
            mb:"0",
            mr:"10px"
          }}
          className="text-2xl font-semibold">
            Color
          </FormLabel>
          <RadioGroup
            aria-labelledby="color"
            defaultValue=""
            name="color"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </section>
    </div>
  );
};

export default FilterSection;

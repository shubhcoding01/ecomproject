import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../data/Filter/color";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expandColor,setExpendColor]=useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleColorToggle = () =>{
    setExpendColor(!expandColor);
  };

  const updateFilterParams = (e: any) =>{
    const {value, name } = e.target;
    if(value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };
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

      <div className="px-9 space-y-6">
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
            {colors.slice(0,expandColor?colors.length:5).map((item)=><FormControlLabel
              value="female"
              control={<Radio />}
              label={<div className="flex items-center gap-3">
                <p>{item.name}</p>
                <p style={{backgroundColor:item.hex}} className={`h-5 w-5 rounded-full ${item.name==="White"?
                  "border":""}`}>

                  </p>
              </div>}
            />)}
            
            
          </RadioGroup>
        </FormControl>
        <div>
          <button
          onClick={handleColorToggle}
          className="text-primary-color cursor-pointer hover:text-teal-400
          flex items-center">
            {expandColor?"hide":`+${colors.length-5}more`}
          </button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default FilterSection;

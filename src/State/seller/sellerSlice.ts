import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const fetchSellerProfile = createAsyncThunk(
  "seller/fetchSellerProfile",async(jwt: string,{rejectWithValue}) => {
    try{
        const response = await api.get("/sellers/profile", {
headers: {
          Authorization: `Bearer ${jwt}`,
        },
        });
        console.log("Seller profile fetched successfully:", response);
    }   catch (error) {
      console.error("Error fetching seller profile:", error); 
    }
}
)
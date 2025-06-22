import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";


export const sendLoginSignupOtp = createAsyncThunk(
  "seller/sendLoginSignupOtp",async({email}:{email:string},{rejectWithValue}) => {
    try{
        const response = await api.get("/auth/sent/loginsignupotp");
        console.log("Login OTP : ", response);
    }   catch (error) {
      console.error("Error fetching seller profile:", error); 
    }
}
)
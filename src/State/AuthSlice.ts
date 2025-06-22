import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";


export const sendLoginSignupOtp = createAsyncThunk(
  "seller/sendLoginSignupOtp",async({email}:{email:string},{rejectWithValue}) => {
    try{
        const response = await api.post("/auth/sent/loginsignupotp",{email});
        console.log("Login OTP : ", response);
    }   catch (error) {
      console.error("Error fetching seller profile:", error); 
    }
}
)

export const signin = createAsyncThunk(
  "seller/signin",async(loginRequest:{email:string},{rejectWithValue}) => {
    try{
        const response = await api.post("/auth/signing",loginRequest);
        console.log("Login OTP : ", response.data);
    }   catch (error) {
      console.error("Error fetching seller profile:", error); 
    }
}
)
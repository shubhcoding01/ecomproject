import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";
// import { resetSeller } from "./seller/sellerSlice";


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
        localStorage.setItem("jwt", response.data.jwt);
        return response.data.jwt;
    }   catch (error) {
      console.error("Error fetching seller profile:", error); 
    }
}
)

export const logout = createAsyncThunk<any,any>(
  "/auth/logout",async(navigate, {rejectWithValue}) => {
    try{
        localStorage.clear();
        console.log("Logout Success: ");
        navigate("/");
    }   catch (error) {
      console.error("Error Logout", error); 
    }
}
)




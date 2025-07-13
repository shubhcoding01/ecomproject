import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { report } from "process";
import { create } from "domain";

export const fetchSellerProfile = createAsyncThunk(
  "seller/fetchSellerProfile",async(jwt: string,{rejectWithValue}) => {
    try{
        const response = await api.get("/sellers/profile", {
headers: {
          Authorization: `Bearer ${jwt}`,
        },
        });
        console.log("Seller profile fetched successfully:", response.data);
        return response.data;
    }   catch (error) {
      console.error("Error fetching seller profile:", error); 
    }
}
)

//logout 13th jul
export const logout = createAsyncThunk<any,any>(
  "/seller/logout",async(navigate, {rejectWithValue}) => {
    try{
        localStorage.clear();
        console.log("Logout Success: ");
        navigate("/");
    }   catch (error) {
      console.error("Error Logout", error); 
    }
}
)

interface SellerState {
  sellers: any[],
  selectedSeller: any | null,
  profle: any | null,
  report: any | null,
  loading: boolean,
  error: string | null,
}

const initialState:SellerState={
  sellers:[],
  selectedSeller:null,
  profle: null,
  report: null,
  loading: false,
  error: null,
}



const sellerSlice=createSlice({
  name: "sellers",
  initialState,
  reducers: {
  //  clearSellerProfile: (state) => {
  //     state.profle = null;
  //     state.loading = false;
  //     state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchSellerProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profle = action.payload;
      state.error = null;
    })
    .addCase(fetchSellerProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    }
    )
    //logout
    .addCase(logout.fulfilled, (state) => {
      state.profle = null;
      state.loading = false;
      state.error = null;
    } 
    )
    .addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    }
    )
  },
});


export default sellerSlice.reducer;

// export const { clearSellerProfile } = sellerSlice.actions;
// export const { resetSeller } = sellerSlice.actions;
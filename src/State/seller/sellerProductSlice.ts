import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";

export const fetchSellerProducts = createAsyncThunk<Product[],any>(
  "/seller/fetchSellerProducts",
    async (jwt: string, { rejectWithValue }) => {
        try {
        const response = await api.get("/sellers/products", {
            headers: {
            Authorization: `Bearer ${jwt}`,
            },
        });
        return response.data;
        } catch (error) {
        console.error("Error fetching seller products:", error);
        throw error;
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";

export const fetchSellerProducts = createAsyncThunk<Product[],any>(
  "/sellerProduct/fetchSellerProducts",
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

export const createProduct = createAsyncThunk<Product,
 { request:any,jwt: string |null}>(
    "/sellerProduct/createProduct",
    async (args, { rejectWithValue }) => {
        const { request, jwt } = args;
        try {
        const response = await api.post("/sellers/products", request, {
            headers: {
            Authorization: `Bearer ${jwt}`,
            },
        });
        return response.data;
        } catch (error) {
        console.error("Error creating product:", error);
        return rejectWithValue(error);
        }
    }
 )
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

const API_URL = "http://localhost:5454/";
 export const fetchProductById = createAsyncThunk(
    "product/fetchProductById", async (productId,{rejectWithValue}) => {
        try {
            const response = await api.get(`${API_URL}/${productId}`);
            
            const data = response.data;
            console.log("Product data:", data);
            return data;
        } catch (error:any) {
            console.error("Error fetching product:", error);
            return rejectWithValue(error.message);
        }
    }
);

 export const searchProduct = createAsyncThunk(
    "product/searchProduct", 
    async (query, {rejectWithValue}) => {
        try {
            const response = await api.get(`${API_URL}/search`, {
                params: { 
                     query 
                    }
                });
            
            const data = response.data;
            console.log("Search Product data:", data);
            return data;
        } catch (error:any) {
            console.error("Error fetching search product:", error);
            return rejectWithValue(error.message);
        }
    }
);

 export const fetchAllProducts = createAsyncThunk<any,any>(
    "product/fetchAllProducts", 
    async (params,{rejectWithValue}) => {
        try {
            const response = await api.get(`${API_URL}`,
                {
                    params: {
                        ...params,
                        pageNumber: params.pageNumber || 0 // Spread the params object to include all query parameters
                    }
                }
            );
            
            

            const data = response.data;
            console.log("All Product data:", data);
            return data;
        } catch (error:any) {
            console.error("Error fetching All product:", error);
            return rejectWithValue(error.message);
        }
    }
);

